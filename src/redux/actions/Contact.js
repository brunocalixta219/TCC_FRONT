import { contact } from '../actionTypes';
import { contactEndpoints } from '../../config/endpoints';
import { removeSpecialCharacters } from '../../helpers';

export const updateContact = (key, value) => ({
    type: contact.EDIT_DATA,
    data: { key, value },
});

export const resetData = () => ({
    type: contact.RESET_DATA,
});

export const getContacts = (id) => async (dispatch, getState, api) => {
    try {
        const response = await api.get(contactEndpoints.getContacts(id));
        dispatch(updateContact('contactList', response.data));
        return response;
    } catch (error) {
        return error.response;
    }
};

export const getContact = (id) => async (dispatch, getState, api) => {
    try {
        const response = await api.get(contactEndpoints.getContact(id));
        dispatch(updateContact('nameContact', response.data.contacts.name));
        dispatch(updateContact('phoneContact', response.data.contacts.phone));
        return response;
    } catch (error) {
        return error.response;
    }
};

export const deleteContact = (id) => async (dispatch, getState, api) => {
    try {
        return await api.delete(contactEndpoints.deleteContact(id));
    } catch (error) {
        return error.response;
    }
};

export const insertContact = (id) => async (dispatch, getState, api) => {
    const { nameContact } = getState().contact;
    const { phoneContact } = getState().contact;

    try {
        const response = await api.post(contactEndpoints.insertContact(id), {
            name: nameContact,
            phone: removeSpecialCharacters(phoneContact),
        });
        return response;
    } catch (error) {
        return error.response;
    }
};

export const updateDataContact = (id) => async (dispatch, getState, api) => {
    const { nameContact } = getState().contact;
    const { phoneContact } = getState().contact;

    try {
        const response = await api.put(contactEndpoints.updateDataContact(id), {
            name: nameContact,
            phone: removeSpecialCharacters(phoneContact),
        });
        return response;
    } catch (error) {
        return error.response;
    }
};
