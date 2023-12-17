import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, View } from 'react-native';
import LoginScreen from './App/src/view/screens/LoginScreen';
import HomeScreen from './App/src/view/screens/HomeScreen';
import CourseScreen from './App/src/view/screens/CourseScreen';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import RegistrationScreen from './App/src/view/screens/RegistrationScreen';
import React from 'react';
import ProfileScreen from './App/src/view/screens/ProfileScreen';
import VideoScreen from './App/src/view/screens/VideoScreen';
import NewScreen from './App/src/view/screens/NewScreen';
import ChatBotScreen from './App/src/view/screens/ChatBotScreen';
import ChatScreen from './App/src/view/screens/ChatScreen';


const Stack = createStackNavigator();

const App = ({ navigation }) => {

  const [initialRouteName, setInitialRouteName] = React.useState('');

  React.useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (userData.loggedIn) {
          setInitialRouteName('HomeScreen');
        } else {
          setInitialRouteName('LoginScreen');
        }
      } else {
        setInitialRouteName('RegistrationScreen');
      }
    } catch (error) {
      setInitialRouteName('RegistrationScreen');
    }
  };




  return (
    <NavigationContainer>
      <Stack.Navigator
      // initialRouteName={initialRouteName}
      >
        <Stack.Screen name='ChatBotScreen' component={ChatBotScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='Chat' component={ChatScreen} options={{ headerShown: true }}></Stack.Screen>
        {/* <Stack.Screen name='NewScreen' component={NewScreen} options={{ headerShown: false }}></Stack.Screen> */}
        {/* <Stack.Screen name='RegistrationScreen' component={RegistrationScreen}></Stack.Screen>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={({ route, navigation }) => ({
            headerShown: false,
            headerLeft: () => (
              <MaterialIcons name="sort" size={24} color="black" style={{ marginLeft: 10 }} />
            ),
            headerRight: () =>
            (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('ProfileScreen')}
              >
                <Image
                  style={{ height: 40, width: 40, marginRight: 20 }}
                  source={require('./App/src/assets/avatar.png')} />
              </TouchableOpacity>
            )


          })}
        />
        <Stack.Screen

          name='CourseScreen'
          component={CourseScreen}
          options={() => ({
            headerTransparent: true,
            headerRight: () => (
              <MaterialIcons
                name="more-vert"
                size={25} color="black"
                style={{ marginRight: 20 }}
              />
            )
          })}
        />
        <Stack.Screen
          name='ProfileScreen'
          component={ProfileScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='VideoScreen'
          component={VideoScreen}
          options={{ headerShown: true }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;
