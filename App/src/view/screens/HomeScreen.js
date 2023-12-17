import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../conts/colors';
import courses from '../../conts/courses';
import Button from '../Components/Button';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const HomeScreen = ({ navigation }) => {

    const [UserDetails, setUserDetails] = React.useState();
    React.useEffect(() => {
        getUserDetails()
    }, [])
    const getUserDetails = async () => {
        const userData = await AsyncStorage.getItem('user')
        if (userData) {
            setUserDetails(JSON.parse(userData));
        }
    }

    const getUserData = async () => {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
            setUserDetails(JSON.parse(userData));
        }
    };

    const logout = async () => {
        // await AsyncStorage.removeItem("user")

        navigation.navigate('LoginScreen')
    }





    const CourseCard = ({ course }) => {
        return <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('CourseScreen', { data: course })}>
            <ImageBackground source={course.image} style={{
                marginVertical: 10,
                marginHorizontal: 5,
                borderRadius: 50,
                width: windowWidth / 2 - 30,
                height: windowHeight / 3,
                overflow: 'hidden',
                paddingLeft: 20,
                borderRadius: 15,
            }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }} >
                    {course.name}
                </Text>
                <Text style={{ color: '#8F95B2', fontWeight: '600' }}>
                    {course.totalCourse + ' Courses'}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    }



    return (
        <SafeAreaView

            style={{
                backgroundColor: '#fff',
                flex: 1,
                paddingHorizontal: 20,
            }}>

            <View style={{ marginTop: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
                        Welcome {UserDetails?.fullname}
                    </Text>
                    <View style={{ marginLeft: 100 }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('ProfileScreen')}
                        >
                            <Image
                                style={{ height: 40, width: 40, marginRight: 20 }}
                                source={require('../../assets/avatar.png')} />
                        </TouchableOpacity>
                    </View>


                </View>
                <Text style={{ fontSize: 22, color: '#61688B', marginTop: 15 }}>
                    Find a course you want to learn
                </Text>
                <View style={{
                    height: 60,
                    marginTop: 35,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 15,
                    backgroundColor: '#F5F5F7',
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderRadius: 30,
                    display: 'flex'
                }}>
                    <Icon name="search" size={30} />
                    <TextInput
                        style={{ fontSize: 20, marginLeft: 15 }}
                        placeholder="Search for anything"
                    />
                </View>
                <View style={{
                    paddingVertical: 25,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Categories</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#6E8AFA' }}>See All</Text>
                </View>
            </View>
            <View>
                <FlatList
                    horizontal={true}
                    showVerticalScrollIndicator={false}
                    numColums={3} data={courses}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <CourseCard course={item} />} />
            </View>
            <Button title="Logout" onPress={logout} />

        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    back: {
        backgroundColor: COLORS.alt,
        width: 45,
        height: 45,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }
})
export default HomeScreen;