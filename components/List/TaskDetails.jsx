import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid, ScrollView} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {styles} from '../../styles/styles'
import { createStackNavigator } from '@react-navigation/stack';

function ListNavigator() {

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenHeader}>Task Details List</Text>
        </View>
    )
}

export default ListNavigator