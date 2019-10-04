const INITIAL_STATE = {
    email: '',
    password: '',
    status: 0,
    uid: '',
    list: [],
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_UID':
            return { ...state, status: 1, uid: action.uid };
            break;
        case 'CHANGE_STATUS':
            return { ...state, status: action.status };
            break;
        case 'CHANGE_EMAIL':
            return { ...state, email: action.email };
            break;
        case 'CHANGE_PASSWORD':
            return { ...state, password: action.password };
            break;
        case 'CHANGE_LIST':
            return { ...state, list: action.list };
            break;
        default:
            return state;
            break;
    };
};

export default AuthReducer;
