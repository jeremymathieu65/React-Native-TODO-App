import React, { useState, useEffect, useRef, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { UserContext } from './contexts/UserContext';
import Welcome from './components/Welcome';
import {useFonts, Poppins_400Regular, Poppins_100Thin} from '@expo-google-fonts/poppins'

export default function App() {
  const [loggedUser, setLoggedUser] = useState({})
  const [users, setUsers] = useState([])

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_100Thin
  });


  if (!fontsLoaded) {
      return null;
  }

  return (
    <NavigationContainer>
      <UserContext.Provider value={{loggedUser, users, setLoggedUser, setUsers}}>
        <Welcome />
      </UserContext.Provider>
    </NavigationContainer>
  );
}
