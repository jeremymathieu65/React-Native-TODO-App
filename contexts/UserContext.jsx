import React, {useState, useContext, createContext, useEffect} from 'react';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext({})

function UserContextProvider({children}) {
    const [loggedUser, setLoggedUser] = useState({})
    const [users, setUsers] = useState([])

    const loadDataFromLS = async () => {
        try {
            const usersJSON = await AsyncStorage.getItem('users');
            const loggedUserJSON = await AsyncStorage.getItem('loggedUser');
            if (usersJSON !== null) {
                setUsers([...JSON.parse(usersJSON)])
            }
            if (loggedUserJSON !== null) {
                setLoggedUser({...JSON.parse(loggedUserJSON)})
            }
        } catch (e) {
            return {status: 500, message: 'Unable to read data from Local Storage'}
        }
    }
    
    const saveDataToLS = async () => {
        try {
            const usersJSON = JSON.stringify(users);
            const loggedUserJSON = JSON.stringify(loggedUser)
            await AsyncStorage.setItem('users', usersJSON);
            await AsyncStorage.setItem('loggedUser', loggedUserJSON);
        } catch (e) {
            return {status: 500, message: 'Unable to save data to Local Storage'}
        }
    }

    const logoutUser = () => {
        setLoggedUser({})
        ToastAndroid.show("Logged Out Successfully!", ToastAndroid.SHORT)
        return;
    }
    
    const authenticateUser = (userObj) => {
        var email = userObj.email
        var passwd = userObj.passwd
        var authenticated = false
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if (users[i].passwd === passwd) { 
                    authenticated = true;
                    setLoggedUser({...users[i], index: i})
                    break;
                }
                else {
                    return {status: 401, message: 'Incorrect Password'}
                }
            }
        }
        if (authenticated) {
            return {status: 200, message: 'Authorization Successful!'}
        }
        else {
            return {status: 404, message: 'Your email is not registered'}
        }
    }

    const addNewUser = (userObj) => {
        userObj.list = []
        userObj.creationDate = new Date().toDateString()
        var email = userObj.email
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                return {status: 422, message: "Email already exists"}
            }
        }
        setUsers([...users, userObj])
        return {status: 200, message: 'Registered Successfully!'}
    }
    
    const deleteUser = () => {
        var userList = users
        var index = loggedUser.index
        if (index === 0) { userList.shift() }
        else if (index === users.length - 1) { userList.pop() }
        else { userList.splice(index, index) }
        setLoggedUser({})
        setUsers([...userList])
        ToastAndroid.show("Account Deleted Successfully!", ToastAndroid.SHORT)
        return;
    }
    
    const modifyUser = (newVal, key) => {
        var currUser = loggedUser
        var userList = users
        currUser[key] = newVal
        userList[currUser.index][key] = newVal
        setLoggedUser({...currUser})
        setUsers([...userList])
        return {status: 200, message: "User details updated successfully!"}
    }
    
    const addNewTask = (taskObj) => {
        var currUser = loggedUser
        var userList = users
        taskObj.isCompleted = false;
        taskObj.index = currUser.list.length
        currUser.list.push({...taskObj})
        userList[currUser.index].list.push(taskObj)
        setLoggedUser({...currUser})
        setUsers([...userList])
        ToastAndroid.show("Item added successfully!", ToastAndroid.SHORT)
        return
    }
    
    const deleteTask = (taskId) => {
        var currUser = loggedUser
        var userList = users
        var taskList = currUser.list
        if (taskId === 0) { taskList.shift() }
        else if (taskId === taskList.length - 1) { taskList.pop() }
        else { taskList.splice(index, index) }
        for (let i = 0; i < taskList.length; i++) {
            taskList[i].index = i
        }
        currUser.list = taskList
        userList[currUser.index] = currUser
        setLoggedUser({...currUser})
        setUsers([...userList])
        ToastAndroid.show("Item deleted successfully!", ToastAndroid.SHORT)
        return;
    }
    
    const modifyTask = (taskId, key, newVal) => {
        var currUser = loggedUser
        var userList = users
        var taskObj = currUser.list[taskId]
        taskObj[key] = newVal
        currUser.list[taskId] = taskObj
        userList[currUser.index] = currUser
        setLoggedUser({...currUser})
        setUsers([...userList])
        ToastAndroid.show("Great Work!", ToastAndroid.SHORT)
        return
    }

    const getTaskLength = () => {
        var len = 0
        var list = loggedUser.list
        for (let i = 0; i < loggedUser.list.length; i++) {
            if (!list[i].isCompleted) { len++; }
        }
        return len
    }

    const value = {
        loadDataFromLS,
        saveDataToLS,
        logoutUser,
        authenticateUser,
        addNewUser,
        deleteUser,
        modifyUser,
        addNewTask,
        deleteTask,
        modifyTask,
        getTaskLength,
        loggedUser,
        users,
        setUsers,
        setLoggedUser
    }

    useEffect(() => {
        loadDataFromLS()
    }, [])

    useEffect(() => {
        saveDataToLS()
    }, [users, loggedUser])
  
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

function useUserContext() {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUserContext must be used inside UserContextProvider');
    }
    return context;
}
  
export { UserContextProvider, useUserContext };