import { auth } from '../actionTypes';

const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    birthDate: '',
    sex: '',
    phone: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    token: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case auth.EDIT_DATA:
            return { ...state, [action.data.key]: action.data.value };
        case auth.RESET_DATA:
            return initialState;
        default:
            return state;
    }
};
