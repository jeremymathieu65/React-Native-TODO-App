import React, {useState, useEffect, useRef} from 'react'
import {View, Text, Pressable, Modal, TextInput, ToastAndroid} from 'react-native'
import { ListStyles as styles } from '../../styles/styles'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { useUserContext } from '../../contexts/UserContext'

function TaskSnippet({completed}) {
    const [taskList, setTaskList] = useState([])
    const [showModal, setShowModal] = useState([])
    const { loggedUser, modifyTask, deleteTask, updateCount, completeTask } = useUserContext()
    const tempList = useRef([])
    const [modalInput, setModalInput] = useState({
        title: "",
        description: "",
    })

    function handleFormSubmit(taskId, modalIndex) {
        console.log("CAME HERE")
        var currInput = modalInput
        if (currInput.title !== "") {
            modifyTask(taskId, currInput)
            handleCloseModal(modalIndex)
        }
        else {
            ToastAndroid.show("Title can't be empty!", ToastAndroid.SHORT)
        }
    }
    
    function handleCloseModal(index) {
        var tempModal = showModal
        tempModal[index] = false
        setShowModal([...tempModal])
        setModalInput({
            title: "",
            description: "",
        })
    }

    function handleShowModal(index, task) {
        var tempModal = showModal
        tempModal[index] = true
        setShowModal([...tempModal])
        setModalInput({...task})
    }

    function handleFormDataChange(newVal, key) {
        var currInput = modalInput
        currInput[key] = newVal
        setModalInput({...currInput})
    }

    function updateTaskList() {
        var currList = loggedUser.list
        tempList.current = []
        if (completed) {
            currList.forEach((task) => {
                if (task.isCompleted) { tempList.current.push({...task}) }
            })
        }
        else {
            currList.forEach((task) => {
                if (!task.isCompleted) { tempList.current.push({...task}) }
            })
        }
        setTaskList([...tempList.current])
        return null;
    }

    useEffect(() => {
        var tempModal = []
        for (let i = 0; i < taskList.length; i++) {
            tempModal.push(false)
        }
        setShowModal([...tempModal])
    }, [taskList])

    useEffect(() => {
        updateTaskList()
    }, [updateCount])

    return (
        <>
            {(taskList.length > 0) &&
                taskList.map((task, index) => (
                    <Pressable key={index} onPress={!completed ? () => (handleShowModal(index, task)) : () => (null)}>
                        <View style={[styles.taskSnippetContainer, (completed ? styles.taskSnippetCompletedContainer : {})]}>
                            {completed && 
                            <View style={{marginRight: 10}}>
                                <MaterialIcons name="done" size={24} color="white" />
                            </View>}
                            <View style={styles.taskSnippetDescContainer}>
                                <Text style={[styles.taskSnippetTitle, (completed ? { color: 'white'} : {})]}>
                                    {task.title}
                                </Text>
                                <Text style={[styles.taskSnippetDetails, (completed ? { color: 'whitesmoke'} : {})]}>
                                    {task.description}
                                </Text>
                            </View>
                            <View style={styles.taskSnippetOptionsContainer}>
                                {!completed  && 
                                    <Pressable onPress={() => (completeTask(task.index))}>
                                        <MaterialIcons name="done" size={24} color="black" />
                                    </Pressable>}
                                <Pressable onPress={() => (deleteTask(task.index))}>
                                    <AntDesign name="close" size={24} color={completed ? "white" : "black"} />
                                </Pressable>
                            </View>
                        </View>
                        <Modal transparent={true} visible={showModal[index]} onRequestClose={() => (handleCloseModal(index))} animationType='slide'>
                            <View style={styles.addModalContainer}>
                                <View style={styles.addModalWrapper}>
                                    <View style={styles.modalHeaderPane}>
                                        <Text style={styles.modalHeaderText}>Edit Item Details</Text>
                                        <AntDesign name="close" size={24} color="grey" onPress={() => (handleCloseModal(index))} />
                                    </View>
                                    <View style={styles.modalFormContainer}>
                                        <Text style={styles.modalFormInputLabel}>Title*:</Text>
                                        <TextInput defaultValue={task.title} style={styles.modalFormInput} onChangeText={(text) => (handleFormDataChange(text, "title"))} />
                                        <Text style={styles.modalFormInputLabel}>Description:</Text>
                                        <TextInput defaultValue={task.description} style={[styles.modalFormInput, {height: '50%'}]} multiline={true} onChangeText={(text) => (handleFormDataChange(text, "description"))} />
                                        <View style={styles.modalCnfrmContainer}>
                                            <Pressable style={styles.modalCnfrmButton} onPress={() => (handleFormSubmit(task.index, index))}>
                                                <Text style={styles.modalCnfrmText}>Update</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </Pressable>
                ))
            }
            {(taskList.length === 0) && 
                <View style={styles.taskMessageContainer}>
                    <Text style={styles.taskSnippetMessage}>{completed ? "You have no completed tasks" : "You have no pending Tasks"}</Text>
                </View>
            }    
        </>
    )
}

export default TaskSnippet