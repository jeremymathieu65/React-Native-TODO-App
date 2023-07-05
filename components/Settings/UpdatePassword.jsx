import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {ProfileStyles as pStyles, styles} from '../../styles/styles'
import { useNavigation } from '@react-navigation/core';
import { Ionicons, FontAwesome } from '@expo/vector-icons';


function UpdatePassword() {
    const nav = useNavigation()
    const {modifyUser} = useUserContext()

    const [userInput, setUserInput] = useState({
        passwd: "",
        cnfrmPasswd: "",
    })
    const [error, setError] = useState("")

    function handleFormDataChange(newVal, key) {
        var currentInput = userInput
        delete currentInput[key];
        currentInput[key] = newVal
        setUserInput({...currentInput})
    }

    function handleFormSubmit() {
        var keys = ['passwd', 'cnfrmPasswd']
        var formFilled = true
        keys.forEach((key) => {
            if (userInput[key] === "") { 
                formFilled = false 
            }
        })
        if (formFilled) {
            if (verifyPasswd()) {
              var resp = modifyUser(userInput.passwd, 'passwd')
              if (resp.status === 200) {
                ToastAndroid.show(resp.message, ToastAndroid.SHORT)
                nav.navigate("SettingsHome")  
              }
              else {
                setError(resp.message)
              }
            }
            else {
                setError("Please enter matching passwords")
            }
        }
        else {
            setError("Please fill all fields")
        }

    }

    function verifyPasswd() {
        if (userInput.passwd === userInput.cnfrmPasswd) { return true }
        else { return false }
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
                    <Text style={pStyles.screenHeader}>Update Password</Text>
            </View>
            
            <View style={[pStyles.profileInfoContainer, {alignItems: 'center', justifyContent: 'center'}]}>
                <View style={styles.formContainer}>
                    <View style={styles.formInputGroup}>
                        <Text style={styles.fromInputLabel}>New Password:</Text>
                        <TextInput style={styles.formInput} onChangeText={(text) => (handleFormDataChange(text, 'passwd'))} secureTextEntry />
                    </View>
                    <View style={styles.formInputGroup}>
                        <Text style={styles.fromInputLabel}>Re-enter New Password:</Text>
                        <TextInput style={styles.formInput} onChangeText={(text) => (handleFormDataChange(text, 'cnfrmPasswd'))} secureTextEntry />
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

export default UpdatePassword