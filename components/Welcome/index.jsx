import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import { AntDesign } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator()

function Welcome() {
  return (
    <Tabs.Navigator screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
            boxSizing: 'border-box',
            height: 100
        },
        tabBarLabelStyle: {
            marginBottom: 5
        },
        tabBarIconStyle: {
            marginTop: 5
        }
    }}>
        <Tabs.Screen name="Login" component={LoginScreen} options={{
            tabBarIcon: ({color, size}) => (<AntDesign name="login" size={size} color={color} />)
        }} />
        <Tabs.Screen name="Register" component={RegisterScreen} options={{
            tabBarIcon: ({color, size}) => (<AntDesign name="adduser" size={size} color={color} />)
        }} />
    </Tabs.Navigator>
  )
}

export default Welcome