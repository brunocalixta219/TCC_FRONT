import { auth } from '../actionTypes';
import { authEndpoints } from '../../config/endpoints';

export const editCredentials = (key, value) => ({
    type: auth.EDIT_DATA,
    data: { key, value },
});

export const resetData = () => ({
    type: auth.RESET_DATA,
});

export const signUp = () => async (dispatch, getState, api) => {
    try {
        const { email, password } = getState().auth;
        const body = { email, password };
        const response = await api.post(authEndpoints.signUp, body);
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
