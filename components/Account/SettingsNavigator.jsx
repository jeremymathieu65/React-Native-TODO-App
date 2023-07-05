import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {styles} from '../../styles/styles'
import { createStackNavigator } from '@react-navigation/stack';
import { UpdateName, UpdatePassword, SettingsHome } from '../Settings';

const Stack = createStackNavigator()

function SettingsNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="SettingsHome" component={SettingsHome} />
            <Stack.Screen name="UpdatePassword" component={UpdatePassword}/>
            <Stack.Screen name="UpdateName" component={UpdateName}/>            
        </Stack.Navigator>
    )
}

export default SettingsNavigator