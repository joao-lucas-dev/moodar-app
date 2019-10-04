import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import { View, Image, Text, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native';

import BackButton from '../../components/BackButton';

import { setEmail, setPassword, signUpAction } from '../../actions/AuthActions';

import styles from './styles';

export default function SignUp({ navigation }) {
    const [show, setShow] = useState(false);

    const status = useSelector(state => state.auth.status);
    const email = useSelector(state => state.auth.email);
    const password = useSelector(state => state.auth.password);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 1) {
            navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Inside' })
                ]
            }));
        }
    }, [status]);

    function handleSignUp() {
        setShow(true);
        Keyboard.dismiss();
        signUpAction(email, password, setShow, dispatch);
    };

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/logo.jpeg')} />
                <View style={styles.form}>
                    <Text style={styles.label}>E-MAIL *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu e-mail"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={text => setEmail(text, dispatch)}
                    />
                    <Text style={styles.label}>SENHA *</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text, dispatch)}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                        {show ? <ActivityIndicator size="large" color="#FFF" /> : <Text style={styles.buttonText}>Cadastrar</Text>}
                    </TouchableOpacity>
                </View>
            </View>
            <BackButton navigation={navigation} />
        </>
    );
}
