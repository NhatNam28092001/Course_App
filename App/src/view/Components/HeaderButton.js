import { View, Text } from 'react-native'
import React from 'react'

 
const HeaderButton = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProfileScreen')}
        >
            <Image
                style={{ height: 40, width: 40, marginRight: 20 }}
                source={require('./App/src/assets/avatar.png')} />
        </TouchableOpacity>
    )
}

export default HeaderButton