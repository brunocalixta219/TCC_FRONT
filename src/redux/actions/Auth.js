import { auth } from '../actionTypes';
import { authEndpoints, cepEndpoints } from '../../config/endpoints';
import { removeSpecialCharacters } from '../../helpers';

export const editCredentials = (key, value) => ({
    type: auth.EDIT_DATA,
    data: { key, value },
});

export const resetData = () => ({
    type: auth.RESET_DATA,
});

export const signUp = () => async (dispatch, getState, api) => {
    const body = getState().auth;

    try {
        const { phone, cep } = body;
        let newUser = {
            ...body,
            phone: removeSpecialCharacters(phone),
            cep: removeSpecialCharacters(cep),
        };
        console.log('newUser', newUser);
        const response = await api.post(authEndpoints.signUp, newUser);
        const { token, userId } = response.data;

        dispatch(editCredentials('token', `Bearer ${token}`));
        dispatch(editCredentials('userId', userId));

        api.defaults.headers.common['Authorization'] = token;

        return response;
    } catch (error) {
        return error.response;
    }
};

export const signIn = () => async (dispatch, getState, api) => {
    try {
        const { email, password } = getState().auth;
        const body = { email, password };
        const response = await api.post(authEndpoints.signIn, body);
        const { token, userId } = response.data;

        dispatch(editCredentials('token', `Bearer ${token}`));
        dispatch(editCredentials('userId', userId));

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // localStorage.setItem('HWatch@token', token);

        return response;
    } catch (error) {
        return error.response;
    }
};

export const getCEP = () => async (dispatch, getState, api) => {
    const { cep } = getState().auth;

    try {
        const response = await api
            .get(cepEndpoints.getCEP(cep))
            .then((response) => response.data);
        dispatch(editCredentials('street', response.street));
        dispatch(editCredentials('neighborhood', response.neighborhood));
        dispatch(editCredentials('city', response.city));
        dispatch(editCredentials('state', response.state));
        return response;
    } catch (error) {
        return error.response;
    }
};

export const getOne = (id) => async (dispatch, getState, api) => {
    try {
        const response = await api
            .get(authEndpoints.getOne(id))
            .then((response) => response.data);
        dispatch(editCredentials('name', response.payload.name));
        dispatch(editCredentials('email', response.payload.email));
        dispatch(editCredentials('birthDate', response.payload.birthDate));
        dispatch(editCredentials('phone', response.payload.phone));
        dispatch(editCredentials('sex', response.payload.sex));
        dispatch(editCredentials('cep', response.payload.cep));
        dispatch(editCredentials('street', response.payload.street));
        dispatch(editCredentials('number', response.payload.number));
        dispatch(editCredentials('complement', response.payload.complement));
        dispatch(
            editCredentials('neighborhood', response.payload.neighborhood)
        );
        dispatch(editCredentials('city', response.payload.city));
        dispatch(editCredentials('state', response.payload.state));
        return response;
    } catch (error) {
        return error.response;
    }
};
