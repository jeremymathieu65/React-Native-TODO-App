import React from 'react'
import {Button, View, Text, Image, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import { AntDesign } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator()

function Welcome() {
  return (
    <Tabs.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon
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

const styles = StyleSheet.create({
    tabBar: {
        boxSizing: 'border-box',
        height: 70
    },
    tabBarLabel: {
        marginBottom: 5
    },
    tabBarIcon: {
        marginTop: 5
    }
})

export default Welcome