import React, {useState, useEffect, useRef} from 'react'
import {View, Text, TextInput, Pressable, ToastAndroid, ScrollView, Modal} from 'react-native';
import { useUserContext } from '../../contexts/UserContext';
import {ListStyles as styles} from '../../styles/styles'
import { AntDesign } from '@expo/vector-icons';
import TaskSnippet from './TaskSnippet';

function ListNavigator() {
    const [showAddModal, setShowAddModal] = useState(false)
    const [modalInput, setModalInput] = useState({
        title: "",
        description: "",
    })

    const { loggedUser, addNewTask, getTaskLength } = useUserContext()

    function handleFormSubmit() {
        var currInput = modalInput
        if (currInput.title !== "") {
            addNewTask(currInput)
            setShowAddModal(false)
        }
        else {
            ToastAndroid.show("Please enter task title!", ToastAndroid.SHORT)
        }
    }
    
    function handleCloseModal() {
        setModalInput({})
        setShowAddModal(false)
    }

    function handleFormDataChange(newVal, key) {
        var currInput = modalInput
        currInput[key] = newVal
        setModalInput({...currInput})
    }
    
    function getParsedName() {
        var name = loggedUser.name;
        var spaceIndex = name.indexOf(" ")
        if (spaceIndex !== -1) {
            name = name.substring(0, spaceIndex)
        }
        return name;
    }

    function getWelcomeMessage() {
        var numTasks = getTaskLength();
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
                <Pressable onPress={() => (setShowAddModal(true))}>
                    <AntDesign name="plus" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.toDoTasksContainer}>
                <Text style={styles.toDoTasksHeader}>To-Do:</Text>
                <ScrollView style={styles.toDoTasksScrollWrapper} contentContainerStyle={{rowGap: 10}}>
                    <TaskSnippet />
                </ScrollView>
                <Text style={styles.toDoTasksHeader}>Completed:</Text>
                <ScrollView style={styles.toDoTasksScrollWrapper} contentContainerStyle={{rowGap: 10}}>
                    <TaskSnippet completed={true} />
                </ScrollView>
            </View>
            <Modal transparent={true} visible={showAddModal} onRequestClose={() => (setShowAddModal(false))} animationType='slide'>
                <View style={styles.addModalContainer}>
                    <View style={styles.addModalWrapper}>
                        <View style={styles.modalHeaderPane}>
                            <Text style={styles.modalHeaderText}>Add New Item</Text>
                            <AntDesign name="close" size={24} color="grey" onPress={() => (handleCloseModal())} />
                        </View>
                        <View style={styles.modalFormContainer}>
                            <Text style={styles.modalFormInputLabel}>Title*:</Text>
                            <TextInput style={styles.modalFormInput} onChangeText={(text) => (handleFormDataChange(text, "title"))} />
                            <Text style={styles.modalFormInputLabel}>Description:</Text>
                            <TextInput style={[styles.modalFormInput, {height: '50%'}]} multiline={true} onChangeText={(text) => (handleFormDataChange(text, "description"))} />
                            <View style={styles.modalCnfrmContainer}>
                                <Pressable style={styles.modalCnfrmButton} onPress={() => (handleFormSubmit())}>
                                    <Text style={styles.modalCnfrmText}>Add</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ListNavigator