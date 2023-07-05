import React, {useState, useEffect} from 'react'
import {View, Text, Pressable} from 'react-native'
import { ListStyles as styles } from '../../styles/styles'
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { useUserContext } from '../../contexts/UserContext'

function TaskSnippet({completed}) {
    const [taskList, setTaskList] = useState([])
    const { loggedUser, modifyTask, deleteTask } = useUserContext()

    function updateTaskList() {
        var currList = loggedUser.list
        var tempList = []
        if (completed) {
            currList.forEach((task) => {
                if (task.isCompleted) { tempList.push(task) }
            })
        }
        else {
            currList.forEach((task) => {
                if (!task.isCompleted) { tempList.push(task) }
            })
        }
        console.log(tempList)
        setTaskList([...tempList])
    }

    useEffect(() => {
        updateTaskList()
    }, [loggedUser])

    return (
        <>
            {(taskList.length > 0) &&
                taskList.map((task) => (
                    <Pressable>
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
                                    <Pressable onPress={() => (modifyTask(task.index, "isCompleted", true))}>
                                        <MaterialIcons name="done" size={24} color="black" />
                                    </Pressable>}
                                <Pressable onPress={() => (deleteTask(task.index))}>
                                    <AntDesign name="close" size={24} color={completed ? "white" : "black"} />
                                </Pressable>
                            </View>
                        </View>
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