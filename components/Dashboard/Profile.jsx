import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {styles} from '../../styles/styles'
import { useNavigation } from '@react-navigation/core';

function Profile() {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenHeader}>Profile</Text>
        </View>
    )
}

export default Profile