import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    header: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        width: 220,
        height: 70,
        resizeMode: 'contain',
    },
    add: {
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleAdd: {
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
        marginRight: 5,
    },
    main: {
        flex: 1,
        padding: 10
    },
    footer: {
        width: '100%',
        height: '10%',
        borderTopWidth: 1,
        borderTopColor: '#CCC',
        backgroundColor: '#de5d6d',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    signOut: {
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleSignOut: {
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
        marginRight: 5,
    }
});

export default styles;