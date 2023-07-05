import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {styles} from '../../styles/styles'
import { useNavigation } from '@react-navigation/core';

function RegisterScreen() {
    const { addNewUser } = useUserContext()
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        passwd: "",
        cnfrmPasswd: ""
    })
    const [error, setError] = useState("")
    const nav = useNavigation()

    function handleFormDataChange(newVal, key) {
        var currentInput = userInput
        delete currentInput[key];
        currentInput[key] = newVal
        setUserInput({...currentInput})
    }


    function handleFormSubmit() {
        var keys = ['name', 'email', 'passwd', 'cfnrmPasswd']
        var formFilled = true
        keys.forEach((key) => {
            if (userInput[key] === "") { 
                formFilled = false 
            }
        })
        if (formFilled) {
            if (verifyEmail()) {
                if (verifyPasswd()) {
                    var resp = addNewUser(userInput)
                    if (resp.status === 200) {
                        ToastAndroid.show(resp.message, ToastAndroid.SHORT)
                        nav.navigate("Login")
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
                setError("Please enter a valid email address")
            }
        }
        else {
            setError("Please fill all fields")
        }

    }

    function verifyEmail() {
        if (userInput.email.includes("@") && userInput.email.includes(".")) { return true }
        else { return false }
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
        <View style={styles.screenContainer}>
            <Text style={styles.screenHeader}>Register</Text>
            <View style={styles.formContainer}>
                <View style={styles.formInputGroup}>
                    <Text style={styles.fromInputLabel}>Name:</Text>
                    <TextInput style={styles.formInput} onChangeText={(text) => (handleFormDataChange(text, 'name'))} />
                </View>
                <View style={styles.formInputGroup}>
                    <Text style={styles.fromInputLabel}>Email:</Text>
                    <TextInput style={styles.formInput} onChangeText={(text) => (handleFormDataChange(text, 'email'))} />
                </View>
                <View style={styles.formInputGroup}>
                    <Text style={styles.fromInputLabel}>Password:</Text>
                    <TextInput style={styles.formInput} onChangeText={(text) => (handleFormDataChange(text, 'passwd'))} secureTextEntry />
                </View>
                <View style={styles.formInputGroup}>
                    <Text style={styles.fromInputLabel}>Re-Enter Password:</Text>
                    <TextInput style={styles.formInput} onChangeText={(text) => (handleFormDataChange(text, 'cnfrmPasswd'))} secureTextEntry />
                </View>
                <Pressable style={styles.formSubmitButton} onPress={() => (handleFormSubmit())}>
                    <Text style={styles.formButtonText}>Register</Text>
                </Pressable>
            </View>
            {error && 
                <View style={styles.errorContainer}>
                    <Text style={styles.errorMessage}>{error}</Text>
                </View>
            }
        </View>
    )
}

export default RegisterScreen