import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid, Modal} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {AccountStyles as aStyles, ProfileStyles as pStyles} from '../../styles/styles'
import { useNavigation } from '@react-navigation/core';
import { AntDesign, Ionicons } from '@expo/vector-icons';

function SettingsHome() {
    const nav = useNavigation()
    const [showModal, setShowModal] = useState(false)
    return (
        <View style={aStyles.screenContainer}>
            <View style={pStyles.screenHeaderContainer}>
                <Pressable onPress={() => (nav.navigate("AccountHome"))}>
                    <Ionicons name="arrow-back" size={36} color="black" />
                </Pressable>
                <Text style={pStyles.screenHeader}>Settings</Text>
            </View> 
            <View style={aStyles.navLinksContainer}>
                <Pressable style={aStyles.navLinkContainer} onPress={() => (nav.navigate("UpdateName"))}>
                    <Text style={aStyles.navLinkText}>Update Name</Text>
                    <AntDesign name="right" size={24} color="black" />
                </Pressable>
                <Pressable style={aStyles.navLinkContainer} onPress={() => (nav.navigate("UpdatePassword"))}>
                    <Text style={aStyles.navLinkText}>Update Password</Text>
                    <AntDesign name="right" size={24} color="black" />
                </Pressable>
                <Pressable style={aStyles.navLinkContainer} onPress={() => (null)}>
                    <Text style={aStyles.navLinkText}>Delete Account</Text>
                    <AntDesign name="right" size={24} color="black" />
                </Pressable>
            </View>
            <Modal visible={showModal} transparent={true}>
                <View style={pStyles.modalContainer}>
                    
                </View>
            </Modal>
        </View>
    )
}

export default SettingsHome