import React from 'react';
import { connect } from 'react-redux';
import EditContact from './EditContact';
import {
    getContact,
    updateContact,
    updateDataContact,
} from '../../redux/actions/Contact';

const mapStateToProps = ({ contact }) => ({
    nameContact: contact.nameContact,
    phoneContact: contact.phoneContact,
});

const mapDispatchToProps = (dispatch) => ({
    getContact: (id) => dispatch(getContact(id)),
    updateContact: (key, value) => dispatch(updateContact(key, value)),
    updateDataContact: (id) => dispatch(updateDataContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
