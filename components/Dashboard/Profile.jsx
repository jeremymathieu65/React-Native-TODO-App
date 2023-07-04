import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {styles} from '../../styles/styles'
import { createStackNavigator } from '@react-navigation/stack';
import {ProfileHome, PersonalInformation, Settings} from '../Profile'

const Stack = createStackNavigator()

function Profile() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ProfileHome" component={ProfileHome} />
            <Stack.Screen name="PersonalInformation" component={PersonalInformation}/>
            <Stack.Screen name="Settings" component={Settings}/>
        </Stack.Navigator>
    )
}

export default Profile