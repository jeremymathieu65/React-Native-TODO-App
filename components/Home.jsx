import React from 'react'
import {Button, View, Text, Image, StyleSheet} from 'react-native';
import { useUserContext } from '../contexts/UserContext';
import Welcome from './Welcome';
import Dashboard from './Dashboard';

function Home() {
    const { loggedUser } = useUserContext()

    return (
        <>
            {(Object.keys(loggedUser).length === 0) ? <Welcome /> : <Dashboard />}
        </>
    )
}


export default Home