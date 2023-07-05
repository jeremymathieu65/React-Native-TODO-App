import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {ProfileStyles as pStyles, styles} from '../../styles/styles'
import { useNavigation } from '@react-navigation/core';
import { Ionicons, FontAwesome } from '@expo/vector-icons';


function UpdateName() {
    const nav = useNavigation()
    const {modifyUser} = useUserContext()

    const [userInput, setUserInput] = useState("")
    const [error, setError] = useState("")



    function handleFormSubmit() {
        if (userInput !== "") {
            var resp = modifyUser(userInput, "name")
            if (resp.status === 200) {
                ToastAndroid.show(resp.message, ToastAndroid.SHORT)
                nav.navigate("SettingsHome")
            }
        }
        else {
            setError("Please fill all fields")
        }

    }

    useEffect(() => {
        setTimeout(()=> {
            setError("")
        }, 2000)
    }, [error])

    return (
        <View style={pStyles.screenContainer}>
            <View style={pStyles.screenHeaderContainer}>
                <Pressable onPress={() => (nav.navigate("SettingsHome"))}>
                    <Ionicons name="arrow-back" size={36} color="black" />
                </Pressable>
                    <Text style={pStyles.screenHeader}>Update Name</Text>
            </View>
            
            <View style={[pStyles.profileInfoContainer, {alignItems: 'center', justifyContent: 'center'}]}>
                <View style={styles.formContainer}>
                    <View style={styles.formInputGroup}>
                        <Text style={styles.fromInputLabel}>New Name:</Text>
                        <TextInput style={styles.formInput} onChangeText={(text) => (setUserInput(text))} />
                    </View>
                    <Pressable style={styles.formSubmitButton} onPress={() => (handleFormSubmit())}>
                        <Text style={styles.formButtonText}>Update</Text>
                    </Pressable>
                </View>
                {error && 
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorMessage}>{error}</Text>
                    </View>
                }
            </View>
        </View>
    )
}

export default UpdateName