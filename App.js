import React, { useState, useEffect, useRef, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { UserContextProvider, useUserContext } from './contexts/UserContext';
import Welcome from './components/Welcome';
import {useFonts, Poppins_400Regular, Poppins_100Thin} from '@expo-google-fonts/poppins'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_100Thin
  });

  if (!fontsLoaded) {
      return null;
  }

  return (
    <NavigationContainer>
      <UserContextProvider>
        <Welcome />
      </UserContextProvider>
    </NavigationContainer>
  );
}
