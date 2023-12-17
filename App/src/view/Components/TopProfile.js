import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../../conts/colors';
import { NavigationContainer } from '@react-navigation/native';

const TopProfile = ({ navigation }) => {
    return (
        <View style={styles.icons}>
            <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.navigate('HomeScreen')}>
                <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.setting}>
                <AntDesign name="setting" size={24} color="white" />
            </TouchableOpacity>
        </View>
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
export default TopProfile;
