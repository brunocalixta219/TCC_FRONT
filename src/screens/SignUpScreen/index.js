import { connect } from 'react-redux';
import SignUpScreen from './SignUpScreen';
import {
    editCredentials,
    signUp,
    resetData,
} from 'redux/actions/Auth';

const mapStateToProps = ({ auth }) => ({
    email: auth.email,
    password: auth.password,
    confirmPassword: auth.confirmPassword,
});

const mapDispatchToProps = (dispatch) => ({
    editCredentials: (key, value) => dispatch(editCredentials(key, value)),
    signUp: () => dispatch(signUp()),
    resetData: () => dispatch(resetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
