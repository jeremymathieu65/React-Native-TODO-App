import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, Image, StyleSheet, TextInput, ScrollView, Pressable} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {LoginStyles as styles} from '../../styles/styles'

function LoginScreen() {
    const { authenticateUser } = useUserContext()
    const [userInput, setUserInput] = useState({
        email: "",
        passwd: "",
    })
    const [error, setError] = useState("")

    function handleFormDataChange(newVal, key) {
        var currentInput = userInput
        delete currentInput[key];
        currentInput[key] = newVal
        setUserInput({...currentInput})
    }


    function handleFormSubmit() {
        var keys = ['email', 'passwd']
        var formFilled = true
        keys.forEach((key) => {
            if (userInput[key] === "") { 
                formFilled = false 
            }
        })
        if (formFilled) {
            if (verifyEmail()) {
              var resp = authenticateUser(userInput)
              if (resp.status === 200) {
                setError("SUCCESS")  
              }
              else {
                setError(resp.message)
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
        if (userInput.email.includes("@")) { return true }
        else { return false }
    }

    useEffect(() => {
        setTimeout(()=> {
            setError("")
        }, 2000)
    }, [error])

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.screenHeader}>Login</Text>
            <View style={styles.formContainer}>
                <View style={styles.formInputGroup}>
                    <Text style={styles.fromInputLabel}>Email:</Text>
                    <TextInput style={styles.formInput} onChangeText={(text) => (handleFormDataChange(text, 'email'))} />
                </View>
                <View style={styles.formInputGroup}>
                    <Text style={styles.fromInputLabel}>Password:</Text>
                    <TextInput style={styles.formInput} onChangeText={(text) => (handleFormDataChange(text, 'passwd'))} secureTextEntry />
                </View>
                <Pressable style={styles.formSubmitButton} onPress={() => (handleFormSubmit())}>
                    <Text style={styles.formButtonText}>Login</Text>
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

export default LoginScreen