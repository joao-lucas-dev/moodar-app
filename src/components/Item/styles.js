import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 5,
        padding: 5,
    },
    title: {
        fontWeight: '900',
    },
    areaInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    areaEmoji: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaType: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaDate: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 5,
        paddingBottom: 5,
    },
});

export default styles;
