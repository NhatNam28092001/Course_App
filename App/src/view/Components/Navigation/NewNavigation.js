import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const Stack = createStackNavigator();
function NewNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Newscreen' component={NewScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default NewNavigation
