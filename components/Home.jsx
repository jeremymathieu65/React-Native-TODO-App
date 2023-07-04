import React from 'react'
import {Button, View, Text, Image, StyleSheet} from 'react-native';
import { useUserContext } from '../contexts/UserContext';
import Welcome from './Welcome';

function Home() {
    const { loggedUser } = useUserContext()

    return (
        {(loggedUser === {}) ? <Welcome /> : <Dashboard />}
    )
}


export default Home