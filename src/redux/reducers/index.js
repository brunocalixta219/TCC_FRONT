import { combineReducers } from 'redux';
import auth from './Auth';
import config from './Config';

export default combineReducers({
    auth,
    config,
});
