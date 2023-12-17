import React from 'react'
import { ScrollView, View, Text, SafeAreaView, Keyboard, Pressable, Alert } from 'react-native';
import COLORS from '../../conts/colors';
import Input from '../Components/Input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Components/Button';
import Loader from '../Components/Loader';
import LoginScreen from './LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const RegistrationScreen = ({ navigation }) => {
    const [inputs, setInputs] = React.useState({
        email: '',
        fullname: '',
        phone: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({});

    const [loading, setLoading] = React.useState(false)

    const validate = () => {

        Keyboard.dismiss();
        let valid = true;
        if (!inputs.email) {
            handleError('Please input email', 'email');
            valid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
            handleError('Vui lòng nhập Email', 'email');
            valid = false;
        }
        if (!inputs.fullname) {
            handleError('Vui lòng nhập tên đầy đủ', 'fullname');
            valid = false;
        }

        if (!inputs.phone) {
            handleError('Vui lòng nhập số điện thoại', 'phone');
            valid = false;
        }

        if (!inputs.password) {
            handleError('Vui lòng nhập mật khẩu', 'password');
            valid = false;
        } else if (inputs.password.length < 5) {
            handleError('Password phải tối thiểu 5 ký tự', 'password');

        }

        if (valid) {
            register();
        }
    };

    const register = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

            try {
                AsyncStorage.setItem("user", JSON.stringify(inputs))
                navigation.navigate('LoginScreen')
            } catch (error) {
                Alert.alert("Error", "SomeThing went wrong")
                console.log(error)
            }
        }, 3000)
    }

    const handleOnChange = (text, input) => {
        setInputs((prevState) => ({ ...prevState, [input]: text }));
    };

    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
    }



    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <Loader visible={loading} />
            <ScrollView contentContainerStyle={{
                paddingHorizontal: 20,
            }}
            >
                <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Register</Text>
                <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10, textAlign: 'center' }}>Enter your details to Register</Text>

                <View style={{ marginVertical: 20 }}>
                    <Input
                        placeholder="Enter your Email Address"
                        iconName="email-outline"
                        label="Email"
                        error={errors.email}
                        onFocus={() => {
                            handleError(null, 'email')
                        }}
                        onChangeText={(text) => handleOnChange(text, "email")}

                    />
                    <Input
                        placeholder="Enter your FullName"
                        iconName="account-outline"
                        label="Full Name"
                        error={errors.fullname}
                        onFocus={() => {
                            handleError(null, 'fullname')
                        }}
                        onChangeText={(text) => handleOnChange(text, "fullname")}

                    />
                    <Input
                        keyboardType="numeric"
                        placeholder="Enter your Phone Number"
                        iconName="phone-outline"
                        label="Phone Number"
                        error={errors.phone}
                        onFocus={() => {
                            handleError(null, 'phone')
                        }}
                        onChangeText={(text) => handleOnChange(text, "phone")}

                    />

                    <Input
                        placeholder="Enter your Password"
                        iconName="lock-outline"
                        label="Password"
                        password
                        error={errors.password}
                        onFocus={() => {
                            handleError(null, 'password')
                        }}
                        onChangeText={(text) => handleOnChange(text, "password")}

                    />
                    <Button title="Register" onPress={validate} />
                    <Text
                        onPress={() => navigation.navigate('LoginScreen')}
                        style={{
                            marginTop: 10,
                            color: COLORS.black,
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>
                        Already have account ? Login
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}
export default RegistrationScreen;