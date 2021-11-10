import { connect } from 'react-redux';
import Profile from './Profile';
import { getOne } from '../../redux/actions/Auth';

const mapStateToProps = ({ auth }) => ({
    name: auth.name,
    birthDate: auth.birthDate,
    email: auth.email,
    phone: auth.phone,
});

const mapDispatchToProps = (dispatch) => ({
    getOne: (id) => dispatch(getOne(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
