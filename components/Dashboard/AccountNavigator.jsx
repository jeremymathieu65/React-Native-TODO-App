import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {styles} from '../../styles/styles'
import { createStackNavigator } from '@react-navigation/stack';
import {AccountHome, Profile, SettingsNavigator, About} from '../Account'

const Stack = createStackNavigator()

function AccountNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="AccountHome" component={AccountHome} />
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Settings" component={SettingsNavigator}/>
            <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
    )
}

export default AccountNavigator