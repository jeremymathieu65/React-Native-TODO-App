import React from 'react'
import {Button, View, Text, Image, StyleSheet} from 'react-native';

function LoginScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
      flex: 1,
      backgroundColor: 'white'

  }
})

export default LoginScreen