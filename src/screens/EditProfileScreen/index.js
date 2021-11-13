import { connect } from 'react-redux';
import {
    getOne,
    getCEP,
    editCredentials,
    updateProfile,
} from '../../redux/actions/Auth';
import EditProfile from './EditProfile';

const mapStateToProps = ({ auth }) => ({
    email: auth.email,
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
    getOne: (id) => dispatch(getOne(id)),
    editCredentials: (key, value) => dispatch(editCredentials(key, value)),
    getCEP: () => dispatch(getCEP()),
    updateProfile: (id) => dispatch(updateProfile(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
