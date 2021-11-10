import { contact } from '../actionTypes';

const initialState = {
    nameContact: '',
    phoneContact: '',
    contactList: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case contact.EDIT_DATA:
            return { ...state, [action.data.key]: action.data.value };
        case contact.RESET_DATA:
            return initialState;
        default:
            return state;
    }
};
