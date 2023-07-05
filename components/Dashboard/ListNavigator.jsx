import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {styles} from '../../styles/styles'
import { createStackNavigator } from '@react-navigation/stack';
import { ListHome, TaskDetails } from '../List';

const Stack = createStackNavigator()

function ListNavigator() {

    return ( 
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ListHome" component={ListHome} />
            <Stack.Screen name="TaskDetails" component={TaskDetails}/>
        </Stack.Navigator>
    )
}

export default ListNavigator