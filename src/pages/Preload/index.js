import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavigationActions, StackActions } from 'react-navigation';
import { View, Image } from 'react-native';

import styles from './styles';

import { checkStatus } from '../../actions/AuthActions';

export default function Preload({ navigation }) {
    const status = useSelector(state => state.auth.status);
    const dispatch = useDispatch();

    useEffect(() => {
        checkStatus(dispatch);
    }, []);

    useEffect(() => {
        switch (status) {
            case 1:
                navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Inside' })
                    ]
                }));
                break;
            case 2:
                navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home' })
                    ]
                }));
                break;
            default:
                break;
        }
    }, [status]);

    return (
        <View style={styles.container}>
            <Image style={{ width: 200, resizeMode: 'contain' }} source={require('../../assets/logo.jpeg')} />
        </View>
    );
}
