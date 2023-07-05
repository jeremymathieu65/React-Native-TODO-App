import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid, Linking} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {AccountStyles as aStyles, ProfileStyles as pStyles} from '../../styles/styles'
import { useNavigation } from '@react-navigation/core';
import { Ionicons, AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';

function About() {

    const nav = useNavigation()

    return (
        <View style={aStyles.screenContainer}>
            <View style={pStyles.screenHeaderContainer}>
                <Pressable onPress={() => (nav.navigate("AccountHome"))}>
                    <Ionicons name="arrow-back" size={36} color="black" />
                </Pressable>
            </View>
            <View style={[pStyles.profileInfoContainer, {justifyContent: 'center'}]}>
                <Text style={pStyles.aboutHeadline}>Developed by Umer Abid, a Full-stack developer</Text>
                <View style={pStyles.aboutSocialsPane}>
                    <Pressable onPress={() => (Linking.openURL("https://github.com/jeremymathieu65"))}>
                        <AntDesign name="github" size={24} color="black" />
                    </Pressable>

                    <Pressable onPress={() => (Linking.openURL("https://www.linkedin.com/in/umer-abid/"))}>
                        <AntDesign name="linkedin-square" size={24} color="black" />
                    </Pressable>

                    <Pressable onPress={() => (Linking.openURL("whatsapp://send?text=hello&phone=923102593515"))}>
                        <FontAwesome name="whatsapp" size={24} color="black" />
                    </Pressable>

                    <Pressable onPress={() => (Linking.openURL("mailto:jeremymathieu65@gmail.com"))}>
                        <Entypo name="mail" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default About