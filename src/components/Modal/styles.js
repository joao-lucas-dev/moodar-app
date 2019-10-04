import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    areaButton: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.8)',
    },
    backButton: {
        padding: 10,
    },
    areaInput: {
        flex: 2,
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        padding: 10,
    },
    title: {
        fontSize: 24,
        alignSelf: 'center',
    },
    titleDate: {
        fontSize: 24,
        alignSelf: 'center',
        marginBottom: 10,
    },
    areaEmoji: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    emoji: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderWidth: 2,
        borderRadius: 5,
    },
    titleEmoji: {
        fontSize: 12,
    },
    submit: {
        alignSelf: 'center',
        width: '92%',
        height: 42,
        padding: 22,
        backgroundColor: '#4dbde0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
    },
    titleSubmit: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonDate: {
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
