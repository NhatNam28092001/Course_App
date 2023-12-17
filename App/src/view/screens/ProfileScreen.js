import { View, Text, ImageBackground, StyleSheet, Image, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Top from '../Components/TopProfile'
import MiddleProfie from '../Components/MiddleProfie'
import Bottom from '../Components/Bottom'
import Sizes from '../../conts/sizes'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {

  return (
    <ScrollView>
      <ImageBackground
        style={styles.bgImage}
        source={require('../../assets/bg.png')}
      >
        <View style={styles.container}>
          <Top navigation={navigation} />
          <MiddleProfie />
          <Bottom />
        </View>
      </ImageBackground>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover"
  },
  container: {
    marginHorizontal: Sizes.medium,
    marginTop: Sizes.safe,
  }
})

export default ProfileScreen;