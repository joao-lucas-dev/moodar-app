import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    area: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
    signIn: {
        width: '80%',
        height: 42,
        padding: 22,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#de5d6d',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    signUp: {
        width: '80%',
        height: 42,
        padding: 22,
        borderRadius: 20,
        backgroundColor: '#4dbde0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleSignIn: {
        color: '#de5d6d',
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleSignUp: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default styles;
