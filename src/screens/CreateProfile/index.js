import { connect } from 'react-redux';
import CreateProfile from './CreateProfile';
import { createProfile, getCEP, updateProfile } from 'redux/actions/Profile';

const mapStateToProps = ({ profile, auth }) => ({
    name: profile.name,
    cpf: profile.cpf,
    birthDate: profile.birthDate,
    gender: profile.gender,
    telephone: profile.telephone,
    cellphone: profile.cellphone,
    cep: profile.cep,
    street: profile.street,
    number: profile.number,
    complement: profile.complement,
    neighborhood: profile.neighborhood,
    city: profile.city,
    state: profile.state,
    role: auth.role,
    diagnostic: profile.diagnostic,
});

const mapDispatchToProps = (dispatch) => ({
    getCEP: () => dispatch(getCEP()),
    updateProfile: (key, value) => dispatch(updateProfile(key, value)),
    createProfile: () => {
        dispatch(createProfile());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
