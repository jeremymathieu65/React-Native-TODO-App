import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {ProfileStyles as styles} from '../../styles/styles'
import { useNavigation } from '@react-navigation/core';
import { Ionicons, FontAwesome } from '@expo/vector-icons';


function Profile() {
  const nav = useNavigation()
  const {loggedUser} = useUserContext()
  return (
    <View style={styles.screenContainer}>
      <View style={styles.screenHeaderContainer}>
        <Pressable onPress={() => (nav.navigate("AccountHome"))}>
          <Ionicons name="arrow-back" size={36} color="black" />
        </Pressable>
        <Text style={styles.screenHeader}>Profile</Text>
      </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.profileInfoWrapper}>
          <FontAwesome name="user-circle" size={75} color="black" />
          
          <View style={styles.profileItemGroup}>
            <Text style={styles.profileItemLabel}>Name</Text>
            <Text style={styles.profileItemValue}>{loggedUser.name}</Text>
          </View>

          <View style={styles.profileItemGroup}>
            <Text style={styles.profileItemLabel}>Email</Text>
            <Text style={styles.profileItemValue}>{loggedUser.email}</Text>
          </View>
          
          <View style={styles.profileItemGroup}>
            <Text style={styles.profileItemLabel}>Total Number of Tasks</Text>
            <Text style={styles.profileItemValue}>{loggedUser.list.length}</Text>
          </View>

          <View style={styles.profileItemGroup}>
            <Text style={styles.profileItemLabel}>Account Creation Date</Text>
            <Text style={styles.profileItemValue}>{loggedUser.creationDate}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Profile