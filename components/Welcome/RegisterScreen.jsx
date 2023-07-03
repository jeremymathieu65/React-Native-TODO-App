import React from 'react'
import {Button, View, Text, Image, StyleSheet} from 'react-native';

function RegisterScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Register</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'white'

    }
})

export default RegisterScreen