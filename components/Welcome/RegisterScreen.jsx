import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, Image, StyleSheet, TextInput, ScrollView, Pressable} from 'react-native';
import { addNewUser } from '../../contexts/UserContext';

function RegisterScreen() {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        passwd: "",
        cnfrmPasswd: ""
    })
    const [error, setError] = useState("")

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
                    //TODO SUCCESS
                    addNewUser(userInput)
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
        if (userInput.email.includes("@")) { return true }
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

const styles = StyleSheet.create({  
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    formContainer: {
        borderColor: 'black',
        borderWidth: 5,
        borderStyle: 'solid',
        borderRadius: 10,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 15,
        padding: 15,
    },
    screenHeader: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    formInputGroup: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        rowGap: 10,
    },
    formInputLabel: {
        fontFamily: 'Poppins_100Thin',
        fontSize: 16,
        fontWeight: 'bold',
    },
    formInput: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        fontWeight: 'normal',
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        padding: 5,
        paddingLeft: 10,
    },
    formSubmitButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 10,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formButtonText: {
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold',
        color: 'white',
    },
    errorContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 15,
        borderColor: 'red',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: 'rgba(200, 0, 0, 0.5);' 
    },
    errorMessage: {
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold',
        fontSize: 14,
        color: 'maroon',
    }

})

export default RegisterScreen