import React, {useState, useContext, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext({})

function UserContextProvider({children}) {
    const [loggedUser, setLoggedUser] = useState({})
    const [users, setUsers] = useState([])

    const loadDataFromLS = async () => {
        try {
            const users = await AsyncStorage.getItem('users');
            const loggedUser = await AsyncStorage.getItem('loggedUser');
            if (users !== null) {
                setUsers([...JSON.parse(users)])
            }
            if (loggedUser !== null) {
                setLoggedUser({...JSON.parse(loggedUser)})
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
    
    const authenticateUser = (userObj) => {
        var email = userObj.email
        var passwd = userObj.passwd
        var authenticated = false
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if (users[i].passwd === passwd) { 
                    authenticated = true;
                    setLoggedUser({...users[i]})
                    break;
                }
                else {
                    return {status: 401, message: 'Incorrect Password'}
                }
            }
        }
        if (authenticated) {
            return {status: 200, message: 'Authorization Successful'}
        }
        else {
            return {status: 404, message: 'Your email is not registered'}
        }
    }
    
    const addNewUser = (userObj) => {
        userObj.list = []
        var email = userObj.email
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                return {status: 422, message: "Email already exists"}
            }
        }
        setUsers([...users, userObj])
        var resp = saveDataToLS()
        if (resp.status === 500) {
            return resp
        }
        else {
            return {status: 200, message: 'User Registered Successfully'}
        }
    }
    
    const deleteUser = (email) => {
        //TODO
    }
    
    const modifyUser = (email) => {
        //TODO
    }
    
    const addNewTask = (taskObj) => {
        //TODO
    }
    
    const deleteTask = (taskId) => {
        //TODO
    }
    
    const modifyTask = (taskId) => {
        //TODO
    }

    const value = {
        loadDataFromLS,
        saveDataToLS,
        authenticateUser,
        addNewUser,
        deleteUser,
        modifyUser,
        addNewTask,
        deleteTask,
        modifyTask,
        loggedUser,
        users,
        setUsers,
        setLoggedUser
    }

    useEffect(() => {
        loadDataFromLS()
    }, [])
  
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