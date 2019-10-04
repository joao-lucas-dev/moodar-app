import firebase from '../services/api';

// Action para verificar se o usuário está logado ou não
export function checkStatus(dispatch) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            firebase.database().ref('users').child(user.uid).orderByChild('count').on('value', (snapshot) => {
                const list = [];

                snapshot.forEach((childItem) => {
                    list.push({
                        key: childItem.key,
                        emojiActive: childItem.val().emojiActive,
                        emojiName: childItem.val().emojiName,
                        emojiTitle: childItem.val().emojiTitle,
                        color: childItem.val().color,
                        date: childItem.val().date,
                    });
                });

                dispatch({
                    type: 'CHANGE_LIST',
                    list,
                });
                
                dispatch({
                    type: 'CHANGE_UID',
                    uid: user.uid,
                });
            });
        } else {
            dispatch({
                type: 'CHANGE_STATUS',
                status: 2,
            });
        }
    });
};

// Action para deslogar o usuário
export function signOutAction() {
    firebase.auth().signOut();
};

// Action para cadastrar o usuário no sistema
export function signUpAction(email, password, setShow, dispatch) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            const { uid } = firebase.auth().currentUser;

            dispatch({
                type: 'CHANGE_UID',
                uid,
            });
            dispatch({
                type: 'CHANGE_EMAIL',
                email: '',
            });
            dispatch({
                type: 'CHANGE_PASSWORD',
                password: '',
            });

            setShow(false);
        })
        .catch((err) => {
            alert(err);
            setShow(false);
        });
}

// Action para logar o usuário no sistema
export function signInAction(email, password, setShow, dispatch) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            const { uid } = firebase.auth().currentUser;

            dispatch({
                type: 'CHANGE_UID',
                uid,
            });
            dispatch({
                type: 'CHANGE_EMAIL',
                email: '',
            });
            dispatch({
                type: 'CHANGE_PASSWORD',
                password: '',
            });

            setShow(false);
        })
        .catch((err) => {
            alert(err);
            setShow(false);
        });
}

// Action para enviar um email de alteração de senha em caso de esquecimento
export function forgotPasswordAction(email) {
    firebase.auth().sendPasswordResetEmail(email).then(function () {
        alert('E-mail de redefinição de senha enviado com sucesso!');
    }).catch(function (error) {
        alert(error);
    });
}

// Action para alterar o valor do campo e-mail
export function setEmail(email, dispatch) {
    dispatch({
        type: 'CHANGE_EMAIL',
        email,
    });
};

// Action para alterar o valor do campo senha
export function setPassword(password, dispatch) {
    dispatch({
        type: 'CHANGE_PASSWORD',
        password,
    });
};

export function setList(uid, dispatch) {
    firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        const list = [];

        snapshot.forEach((childItem) => {
            list.push({
                key: childItem.key,
                emojiActive: childItem.val().emojiActive,
                emojiName: childItem.val().emojiName,
                emojiTitle: childItem.val().emojiTitle,
                color: childItem.val().color,
                date: childItem.val().date,
            });
        });

        dispatch({
            type: 'CHANGE_LIST',
            list,
        });
    });
}

export function submitStress(emojiActive, emojiName, emojiTitle, date, uid, setVisible) {
    const data = firebase.database().ref('users').child(uid);
    const { key } = data.push();

    let color = '';

    switch (emojiActive) {
        case 1:
            color = '#FF0000';
            break;
        case 2:
            color = '#FF8C00';
            break;
        case 3:
            color = '#FFD700';
            break;
        case 4:
            color = '#4dbde0';
            break;
        default:
            break;
    }

    data.child(key).set({
        emojiActive,
        emojiName,
        emojiTitle,
        color,
        date
    })
        .then(() => {
            setVisible(false);
        })
        .catch((error) => {
            alert(error);
        });
};

export function updateStress(key, emojiActive, emojiName, emojiTitle, date, uid, setVisible) {
    let color = '';

    switch (emojiActive) {
        case 1:
            color = '#FF0000';
            break;
        case 2:
            color = '#FF8C00';
            break;
        case 3:
            color = '#FFD700';
            break;
        case 4:
            color = '#4dbde0';
            break;
        default:
            break;
    }

    firebase.database().ref('users').child(uid).child(key).set({
        emojiActive,
        emojiName,
        emojiTitle,
        color,
        date
    })
        .then(() => {
            setVisible(false);
        })
        .catch((error) => {
            alert(error);
        });
};