import React from 'react';
import { View, Text, SafeAreaView, Keyboard, Alert, ScrollView } from 'react-native';
import COLORS from '../../conts/colors';
import Button from '../Components/Button';
import Input from '../Components/Input';
import Loader from '../Components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';



const LoginScreen = ({ navigation }) => {
    const [inputs, setInputs] = React.useState({ email: '', password: '' });
    const [errors, setErrors] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const validate = async () => {
        Keyboard.dismiss();
        let valid = true;
        if (!inputs.email) {
            handleError('Please input email', 'email');
            valid = false;
        }
        if (!inputs.password) {
            valid = false;
            handleError('Please input password', 'password');

        }
        if (valid) {
            login();
        }
    };

    const login = () => {
        setLoading(true);
        setTimeout(async () => {
            setLoading(false);
            let userData = await AsyncStorage.getItem('user');
            if (userData) {
                userData = JSON.parse(userData);
                if (
                    inputs.email == userData.email &&
                    inputs.password == userData.password
                ) {
                    navigation.navigate('HomeScreen');
                    
                    AsyncStorage.setItem(
                        'user',
                        JSON.stringify({ ...userData, loggedIn: true }),
                    );
                    navigation.navigate('HomeScreen')
                } else {
                    Alert.alert('Error', 'Invalid Details');
                }
            } else {
                Alert.alert('Error', 'Người dùng không tồn tại');
            }
        }, 3000);
    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };



    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <Loader visible={loading} />
            <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>
                    LogIn
                </Text>
                <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10, textAlign: 'center' }}>
                    Enter Your Details to Login
                </Text>
                <View style={{ marginVertical: 20 }}>
                    <Input
                        onChangeText={text => handleOnchange(text, 'email')}
                        onFocus={() => handleError(null, 'email')}
                        iconName="email-outline"
                        label="Email"
                        placeholder="Enter your email address"
                        error={errors.email}
                    />
                    <Input
                        onChangeText={text => handleOnchange(text, 'password')}
                        onFocus={() => handleError(null, 'password')}
                        iconName="lock-outline"
                        label="Password"
                        placeholder="Enter your password"
                        error={errors.password}
                        password
                    />
                    <Button title="Login" onPress={validate} />
                    <Text
                        onPress={() => navigation.navigate('RegistrationScreen')}
                        style={{
                            color: COLORS.black,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: 16,
                            marginTop: 15,
                        }}>
                        Don't have account ?Register
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;