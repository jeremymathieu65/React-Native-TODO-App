import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid, Modal} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {AccountStyles as aStyles, ProfileStyles as pStyles} from '../../styles/styles'
import { useNavigation } from '@react-navigation/core';
import { AntDesign, Ionicons } from '@expo/vector-icons';

function SettingsHome() {
    const nav = useNavigation()
    const [showModal, setShowModal] = useState(false)
    const { deleteUser } = useUserContext()
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
                <Pressable style={aStyles.navLinkContainer} onPress={() => (setShowModal(true))}>
                    <Text style={aStyles.navLinkText}>Delete Account</Text>
                    <AntDesign name="right" size={24} color="black" />
                </Pressable>
            </View>
            <Modal visible={showModal} transparent={true} onRequestClose={() => (setShowModal(false))} animationType='slide'>
                <View style={pStyles.modalContainer}>
                    <View style={pStyles.modalWrapper}>
                        <Text style={pStyles.modalText}>Are you sure you want to delete your account?</Text>
                        <View style={pStyles.modalButtonsPane}>
                            <Pressable style={[pStyles.modalConfirmButton, {borderTopLeftRadius: 10, borderBottomLeftRadius: 10}]} onPress={() => (deleteUser())}>
                                <Text style={pStyles.modalConfirmText}>Yes, Delete</Text>
                            </Pressable>
                            <Pressable style={[pStyles.modalConfirmButton, {borderTopRightRadius: 10, borderBottomRightRadius: 10, borderLeftWidth: 0}]} onPress={() => (setShowModal(false))}>
                                <Text style={[pStyles.modalConfirmText, {color: 'grey'}]}>No, Keep</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default SettingsHome