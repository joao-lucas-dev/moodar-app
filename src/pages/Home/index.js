import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Home({ navigation }) {
    function handleSignIn() {
        navigation.navigate('SignIn');
    }

    function handleSignUp() {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.container}>
            <View style={styles.area}>
                <Image style={{ width: 200, resizeMode: 'contain' }} source={require('../../assets/logo.jpeg')}/>
            </View>
            <View style={styles.area}>
                <TouchableOpacity style={styles.signIn} onPress={handleSignIn}>
                    <Text style={styles.titleSignIn}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUp} onPress={handleSignUp}>
                    <Text style={styles.titleSignUp}>CADASTRE-SE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

