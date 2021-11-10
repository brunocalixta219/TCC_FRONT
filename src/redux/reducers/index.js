import { combineReducers } from 'redux';
import auth from './Auth';
import config from './Config';
import contact from './Contact';

export default combineReducers({
    auth,
    config,
    contact,
});
