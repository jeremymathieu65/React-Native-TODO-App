import React, {useState, useEffect, useRef} from 'react'
import {Button, View, Text, TextInput, Pressable, ToastAndroid} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {ListStyles as styles} from '../../styles/styles'
import { AntDesign } from '@expo/vector-icons';

function ListNavigator() {

    const { loggedUser } = useUserContext()
    
    function getParsedName() {
        var name = loggedUser.name;
        var spaceIndex = name.indexOf(" ")
        if (spaceIndex !== -1) {
            name = name.substring(0, spaceIndex)
        }
        return name;
    }

    function getWelcomeMessage() {
        var numTasks = loggedUser.list.length;
        if (numTasks < 3) {
            return "Not much to do today🎉"
        }
        else if (numTasks >= 3 && numTasks < 5) {
            return "Let the grind begin💪🏻"
        }
        else {
            return "Quite some work to do😓. But nothing's impossible👊🏻"
        }
    }

    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerPane}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerGreeting}>Hey {getParsedName()}!</Text>
                    <Text style={styles.headerWelcomeMessage}>{getWelcomeMessage()}</Text>
                </View>
                <Pressable>
                    <AntDesign name="plus" size={24} color="black" />
                </Pressable>
            </View>
        </View>
    )
}

export default ListNavigator