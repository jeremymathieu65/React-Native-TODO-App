import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {AccountStyles as styles} from '../../styles/styles'
import { useNavigation } from '@react-navigation/core';
import { AntDesign } from '@expo/vector-icons';

function AccountHome() {
    const nav = useNavigation()
    const {logoutUser} = useUserContext()
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenHeader}>Account</Text>
            <View style={styles.navLinksContainer}>
                <Pressable style={styles.navLinkContainer} onPress={() => (nav.navigate("Profile"))}>
                    <Text style={styles.navLinkText}>Profile</Text>
                    <AntDesign name="right" size={24} color="black" />
                </Pressable>
                <Pressable style={styles.navLinkContainer} onPress={() => (nav.navigate("Settings"))}>
                    <Text style={styles.navLinkText}>Settings</Text>
                    <AntDesign name="right" size={24} color="black" />
                </Pressable>
                <Pressable style={styles.navLinkContainer} onPress={() => (nav.navigate("About"))}>
                    <Text style={styles.navLinkText}>About</Text>
                    <AntDesign name="right" size={24} color="black" />
                </Pressable>
                <Pressable style={styles.navLinkContainer} onPress={() => (logoutUser())}>
                    <Text style={styles.navLinkText}>Logout</Text>
                    <AntDesign name="right" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    )
}

export default AccountHome