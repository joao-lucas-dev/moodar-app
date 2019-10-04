import React, { useState, useEffect } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from '../../components/Modal';
import Item from '../../components/Item';

import { signOutAction, setList } from '../../actions/AuthActions';

import styles from './styles';

export default function Inside({ navigation }) {
    const [visible, setVisible] = useState(false);

    const uid = useSelector(state => state.auth.uid);
    const list = useSelector(state => state.auth.list);

    const dispatch = useDispatch();

    useEffect(() => {
        setList(uid, dispatch);
    }, []);

    function handleModal() {
        setVisible(true);
    }

    async function handleSignOut() {
        await signOutAction();
        navigation.navigate('Preload');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../assets/logo2.jpeg')} />
            </View>
            <View style={styles.main}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <Item data={item} />}
                    keyExtractor={(item) => item.key}
                    showsVerticalScrollIndicator={false}
                />

            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.add} onPress={handleModal}>
                    <Text style={styles.titleAdd}>Adicionar</Text>
                    <Icon name="add-circle-outline" size={30} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.signOut} onPress={handleSignOut}>
                    <Text style={styles.titleSignOut}>Sair</Text>
                    <Icon name="exit-to-app" size={30} color="#FFF" />
                </TouchableOpacity>
            </View>

            <Modal visible={visible} setVisible={setVisible} />
        </View>
    );
}
