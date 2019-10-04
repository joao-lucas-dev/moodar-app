import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Emoji from 'react-native-emoji';

import Modal from '../Modal';

import styles from './styles';

export default function List({ data }) {
    const [visible, setVisible] = useState(false);

    const { key, color, emojiActive, emojiName, emojiTitle, date } = data;

    const dataActual = new Date();

    const day = dataActual.getDate();
    const month = dataActual.getMonth();
    const year = dataActual.getFullYear();

    let dayActual = '';
    if (date === `${day}/${month + 1}/${year}`) {
        dayActual = 'Hoje';
    } else {
        dayActual = date;
    }

    function handleUpdate() {
        setVisible(true);
    }

    return (
        <>
            <View style={styles.areaDate}>
                <Text style={styles.title}>{dayActual}</Text>
            </View>
            <TouchableOpacity style={[styles.container, { borderColor: color }]} onPress={handleUpdate}>
                <View style={styles.areaInfo}>
                    <View style={styles.areaEmoji}>
                        <Emoji name={emojiName} style={{ fontSize: 50 }} />
                    </View>
                    <View style={styles.areaType}>
                        <Text style={styles.title}>{emojiTitle}</Text>
                    </View>
                </View>
                <Modal
                    visible={visible}
                    setVisible={setVisible}
                    keyUser={key}
                    emojiActiveUser={emojiActive}
                    dateUser={date}
                    isUpdate={true}
                />
            </TouchableOpacity>
        </>
    );
}