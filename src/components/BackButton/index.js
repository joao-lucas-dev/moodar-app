import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

export default function BackButton({ navigation }) {
    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handleGoBack}>
            <Icon name="arrow-back" size={26} color="#000"/>
        </TouchableOpacity>
    );
}