import React from 'react';
import { connect } from 'react-redux';
import NewContact from './NewContact';
import {
    insertContact,
    updateContact,
    resetData,
} from '../../redux/actions/Contact';

const mapStateToProps = ({ contact }) => ({
    nameContact: contact.nameContact,
    phoneContact: contact.phoneContact,
});

const mapDispatchToProps = (dispatch) => ({
    insertContact: (id) => dispatch(insertContact(id)),
    updateContact: (key, value) => dispatch(updateContact(key, value)),
    resetData: () => dispatch(resetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewContact);
