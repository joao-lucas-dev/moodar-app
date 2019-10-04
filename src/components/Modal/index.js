import React, { useState, useEffect } from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from "react-native-modal-datetime-picker";
import Emoji from 'react-native-emoji';

import { submitStress, updateStress } from '../../actions/AuthActions';

import styles from './styles';

export default function ModalItem({ visible, setVisible, isUpdate, dateUser, emojiActiveUser, keyUser }) {
    const [emojiActive, setEmojiActive] = useState(0);
    const [emoji1, setEmoji1] = useState('#FFFFFF');
    const [emoji2, setEmoji2] = useState('#FFFFFF');
    const [emoji3, setEmoji3] = useState('#FFFFFF');
    const [emoji4, setEmoji4] = useState('#FFFFFF');
    const [emojiName, setEmojiName] = useState('');
    const [emojiTitle, setEmojiTitle] = useState('');
    const [date, setDate] = useState('');
    const [dateButton, setDateButton] = useState(new Date());
    const [dateVisible, setDateVisible] = useState(false);

    const uid = useSelector(state => state.auth.uid);
    const list = useSelector(state => state.auth.list);

    const data = new Date();

    const day = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();

    const actualDay = `${day}/${month + 1}/${year}`;

    useEffect(() => {
        if (isUpdate) {
            setDate(dateUser);
        } else {
            setDate(actualDay);
            setDateButton(data);
        }

        switch (emojiActiveUser) {
            case 1:
                setEmojiActive(1);
                setEmojiName('triumph');
                setEmojiTitle('Muito Estressado');
                setEmoji1('#FF0000');
                setEmoji2('#FFFFFF');
                setEmoji3('#FFFFFF');
                setEmoji4('#FFFFFF');
                break;
            case 2:
                setEmojiActive(2);
                setEmojiName('expressionless');
                setEmojiTitle('Bem Estressado');
                setEmoji1('#FFFFFF');
                setEmoji2('#FF8C00');
                setEmoji3('#FFFFFF');
                setEmoji4('#FFFFFF');
                break;
            case 3:
                setEmojiActive(3);
                setEmojiName('neutral_face');
                setEmojiTitle('Pouco Estressado');
                setEmoji1('#FFFFFF');
                setEmoji2('#FFFFFF');
                setEmoji3('#FFD700');
                setEmoji4('#FFFFFF');
                break;
            case 4:
                setEmojiActive(4);
                setEmojiName('grin');
                setEmojiTitle('Nenhum Estresse');
                setEmoji1('#FFFFFF');
                setEmoji2('#FFFFFF');
                setEmoji3('#FFFFFF');
                setEmoji4('#4dbde0');
                break;
            default:
                break;
        }
    }, []);

    function handleGoBack() {
        setVisible(false);
        setEmojiActive(0);
        setEmojiName('');
        setEmojiTitle('');
        setEmoji1('#FFFFFF');
        setEmoji2('#FFFFFF');
        setEmoji3('#FFFFFF');
        setEmoji4('#FFFFFF');
        setDate(actualDay);
        setDateButton(data);
        setDateVisible(false);
    }

    function handleCheckedEmoji(emoji) {
        switch (emoji) {
            case 1:
                setEmojiActive(1);
                setEmojiName('triumph');
                setEmojiTitle('Muito Estressado');
                setEmoji1('#FF0000');
                setEmoji2('#FFFFFF');
                setEmoji3('#FFFFFF');
                setEmoji4('#FFFFFF');
                break;
            case 2:
                setEmojiActive(2);
                setEmojiName('expressionless');
                setEmojiTitle('Bem Estressado');
                setEmoji1('#FFFFFF');
                setEmoji2('#FF8C00');
                setEmoji3('#FFFFFF');
                setEmoji4('#FFFFFF');
                break;
            case 3:
                setEmojiActive(3);
                setEmojiName('neutral_face');
                setEmojiTitle('Pouco Estressado');
                setEmoji1('#FFFFFF');
                setEmoji2('#FFFFFF');
                setEmoji3('#FFD700');
                setEmoji4('#FFFFFF');
                break;
            case 4:
                setEmojiActive(4);
                setEmojiName('grin');
                setEmojiTitle('Nenhum Estresse');
                setEmoji1('#FFFFFF');
                setEmoji2('#FFFFFF');
                setEmoji3('#FFFFFF');
                setEmoji4('#4dbde0');
                break;
            default:
                break;
        }
    }

    function handleShowDate() {
        setDateVisible(true);
    }

    function handleConfirmDate(dataUser) {
        const dayUser = dataUser.getDate();
        const monthUser = dataUser.getMonth();
        const yearUSer = dataUser.getFullYear();

        const dataUserCurrent = `${dayUser}/${monthUser + 1}/${yearUSer}`;
        
        if (day < dayUser && month < monthUser) {
            alert('A data não pode ser maior que a data atual.');
            setDateVisible(false);
        } else {
            setDate(dataUserCurrent);
            setDateButton(dataUser);
            setDateVisible(false);
        }

    }

    function handleCancelDate() {
        setDateVisible(false);
    }

    async function handleSubmit() {
        if (emojiActive === 0) {
            alert('É precisa marcar algum status de estresse.');
        } else {
            const created = list.find(item => item.date == date);
            if (created != null) {
                alert('O nível de estresse nessa data já foi adicionado.');
            } else {
                await submitStress(emojiActive, emojiName, emojiTitle, date, uid, setVisible);
                setVisible(false);
                setEmojiActive(0);
                setEmojiName('');
                setEmojiTitle('');
                setEmoji1('#FFFFFF');
                setEmoji2('#FFFFFF');
                setEmoji3('#FFFFFF');
                setEmoji4('#FFFFFF');
                setDate(actualDay);
                setDateButton(data);
                setDateVisible(false);
            }
        }
    }

    async function handleUpdate() {
        await updateStress(keyUser, emojiActive, emojiName, emojiTitle, date, uid, setVisible);
        setVisible(false);
        setEmojiActive(0);
        setEmojiName('');
        setEmojiTitle('');
        setEmoji1('#FFFFFF');
        setEmoji2('#FFFFFF');
        setEmoji3('#FFFFFF');
        setEmoji4('#FFFFFF');
        setDate(actualDay);
        setDateButton(data);
        setDateVisible(false);
    }

    return (
        <Modal animationType={"fade"} transparent={true} visible={visible}>
            <View style={styles.container}>
                <View style={styles.areaButton}>
                    <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                        <Icon name="arrow-back" size={26} color="#FFF" />
                    </TouchableOpacity>
                </View>
                <View style={styles.areaInput}>
                    <View>
                        <Text style={styles.title}>Qual o seu nível de estresse?</Text>
                        <View style={styles.areaEmoji}>
                            <TouchableOpacity style={[styles.emoji, { borderColor: emoji1 }]} onPress={() => handleCheckedEmoji(1)}>
                                <Emoji name="triumph" style={{ fontSize: 50 }} />
                                <Text style={styles.titleEmoji}>Muito</Text>
                                <Text style={styles.titleEmoji}>Estressado</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.emoji, { borderColor: emoji2 }]} onPress={() => handleCheckedEmoji(2)}>
                                <Emoji name="expressionless" style={{ fontSize: 50 }} />
                                <Text style={styles.titleEmoji}>Bem</Text>
                                <Text style={styles.titleEmoji}>Estressado</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.emoji, { borderColor: emoji3 }]} onPress={() => handleCheckedEmoji(3)}>
                                <Emoji name="neutral_face" style={{ fontSize: 50 }} />
                                <Text style={styles.titleEmoji}>Pouco</Text>
                                <Text style={styles.titleEmoji}>Estressado</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.emoji, { borderColor: emoji4 }]} onPress={() => handleCheckedEmoji(4)}>
                                <Emoji name="grin" style={{ fontSize: 50 }} />
                                <Text style={styles.titleEmoji}>Nenhum</Text>
                                <Text style={styles.titleEmoji}>Estresse</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.titleDate}>Selecione uma data:</Text>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="date-range" size={42} />
                            <TouchableOpacity style={styles.buttonDate} onPress={handleShowDate}>
                                <Text>{date}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        {isUpdate ? <TouchableOpacity style={styles.submit} onPress={handleUpdate}>
                            <Text style={styles.titleSubmit}>ATUALIZAR</Text>
                        </TouchableOpacity> :
                            <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                                <Text style={styles.titleSubmit}>ADICIONAR</Text>
                            </TouchableOpacity>}
                    </View>

                    <DateTimePicker
                        date={dateButton}
                        isVisible={dateVisible}
                        onConfirm={handleConfirmDate}
                        onCancel={handleCancelDate}
                    />
                </View>
            </View>
        </Modal>
    );
}
