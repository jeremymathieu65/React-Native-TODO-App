import {StyleSheet} from 'react-native';

export const LoginStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    formContainer: {
        borderColor: 'black',
        borderWidth: 5,
        borderStyle: 'solid',
        borderRadius: 10,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 15,
        padding: 15,
    },
    screenHeader: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    formInputGroup: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        rowGap: 10,
    },
    formInputLabel: {
        fontFamily: 'Poppins_100Thin',
        fontSize: 16,
        fontWeight: 'bold',
    },
    formInput: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        fontWeight: 'normal',
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        padding: 5,
        paddingLeft: 10,
    },
    formSubmitButton: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 10,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formButtonText: {
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold',
        color: 'white',
    },
    errorContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 15,
        borderColor: 'red',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: 'rgba(200, 0, 0, 0.5);' 
    },
    errorMessage: {
        fontFamily: 'Poppins_400Regular',
        fontWeight: 'bold',
        fontSize: 14,
        color: 'maroon',
    }
})