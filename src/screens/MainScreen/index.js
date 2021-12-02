import { connect } from 'react-redux';
import { getOne } from '../../redux/actions/Auth';
import { getContacts } from '../../redux/actions/Contact';
import Main from './Main';

const mapStateToProps = ({ auth, contact }) => ({
    name: auth.name,
    contactList: contact.contactList,
});

const mapDispatchToProps = (dispatch) => ({
    getOne: (id) => dispatch(getOne(id)),
    getContacts: (id) => dispatch(getContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
