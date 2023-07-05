import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    },
    profileScreenContainer: {
        flex: 1, 
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30
    }
})

export const AccountStyles = StyleSheet.create({
    screenContainer: {
        flex: 1, 
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        rowGap: 10,
        padding: 15,
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: 'white'
    },
    screenHeader: {
        textAlign:  'left',
        fontFamily: 'Poppins_400Regular',
        fontSize: 36,
        fontWeight: 'bold',
    },
    navLinksContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        rowGap: 5
    },
    navLinkContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        padding: 10,
        paddingRight: 0,
        paddingLeft: 0
    },
    navLinkText: {
        fontFamily: 'Poppins_100Thin',
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export const ProfileStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 15,
        paddingTop: 30,
        backgroundColor: 'white'
    },
    screenHeaderContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 10
    },
    screenHeader: {
        textAlign:  'left',
        fontFamily: 'Poppins_400Regular',
        fontSize: 36,
        fontWeight: 'bold',
    },
    profileInfoContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    profileInfoWrapper: {
        width: "80%",
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        borderStyle: 'dashed'
    },
    profileItemGroup: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        rowGap: 10,
        width: '100%',
    },
    profileItemLabel: {
        fontFamily: 'Poppins_100Thin',
        fontSize: 16,
        fontWeight: 'bold',
    },
    profileItemValue: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        fontWeight: 'normal',
    },
    modalContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalWrapper: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 20,
        padding: 20,
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: 'whitesmoke',
        borderRadius: 10
    },
    modalClosePane: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    modalText: {
        width: '100%',
        fontFamily: 'Poppins_100Thin',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalButtonsPane: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalConfirmButton: {
        width: '50%',
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    modalConfirmText: {
        color: 'red',
    },
    aboutHeadline: {
        width: '100%',
        textAlign:  'center',
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        fontWeight: 'bold',      
    },
    aboutSocialsPane: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 20,
        width: '100%',
        padding: 10,
        marginTop: 10
        
    }

})

export const ListStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        paddingTop: 35,
        borderWidth: 2
    },
    headerPane: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerTextContainer: {
        rowGap: 5
    },
    headerGreeting: {
        textAlign:  'left',
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        fontWeight: 'bold', 
    },
    headerWelcomeMessage: {
        textAlign:  'left',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        fontWeight: 'bold', 
        color: 'grey'
    }
})