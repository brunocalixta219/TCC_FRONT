import { connect } from 'react-redux';
import SignUp from './SignUp';
import { editCredentials, signUp, getCEP } from '../../redux/actions/Auth';

const mapStateToProps = ({ auth }) => ({
    email: auth.email,
    password: auth.password,
    confirmPassword: auth.confirmPassword,
    name: auth.name,
    birthDate: auth.birthDate,
    sex: auth.sex,
    phone: auth.phone,
    cep: auth.cep,
    street: auth.street,
    number: auth.number,
    complement: auth.complement,
    neighborhood: auth.neighborhood,
    city: auth.city,
    state: auth.state,
});

const mapDispatchToProps = (dispatch) => ({
    editCredentials: (key, value) => dispatch(editCredentials(key, value)),
    signUp: () => dispatch(signUp()),
    getCEP: () => dispatch(getCEP()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
