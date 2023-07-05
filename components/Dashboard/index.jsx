import React from 'react'
import {Button, View, Text, Image, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListNavigator from './ListNavigator';
import AccountNavigator from './AccountNavigator';
import { Entypo, AntDesign } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator()

function Dashboard() {
  return (
    <Tabs.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon
    }}>
        <Tabs.Screen name="ListNavigator" component={ListNavigator} options={{
            tabBarIcon: ({color, size}) => (<Entypo name="list" size={size} color={color} />),
            tabBarLabel: "To-Do List"
        }} />
        <Tabs.Screen name="AccountNavigator" component={AccountNavigator} options={{
            tabBarIcon: ({color, size}) => (<AntDesign name="user" size={size} color={color} />),
            tabBarLabel: 'Account'
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

export default Dashboard