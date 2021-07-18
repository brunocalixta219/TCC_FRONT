import { connect } from 'react-redux';
import SignUp from './SignUp';
import { editCredentials, signUp, resetData } from '../../redux/actions/Auth';

const mapStateToProps = ({ auth }) => ({
    email: auth.email,
    password: auth.password,
    confirmPassword: auth.confirmPassword,
    name: auth.name,
    birthDate: auth.birthDate,
    sex: auth.sex, 
    phone: auth.phone, 
    cep: auth.cep,
    address: auth.address,
    number: auth.number,
    complement: auth.complement,
    neighborhood: auth.neighborhood,
    city: auth.city, 
    uf: auth.uf,
});

const mapDispatchToProps = (dispatch) => ({
    editCredentials: (key, value) => dispatch(editCredentials(key, value)),
    signUp: () => dispatch(signUp()),
    resetData: () => dispatch(resetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
