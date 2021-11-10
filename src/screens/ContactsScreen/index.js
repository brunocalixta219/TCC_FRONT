import React from 'react';
import { connect } from 'react-redux';
import Contacts from './Contacts';
import { getContacts, deleteContact } from '../../redux/actions/Contact';

const mapStateToProps = ({ contact }) => ({
    contactList: contact.contactList,
});

const mapDispatchToProps = (dispatch) => ({
    getContacts: (id) => dispatch(getContacts(id)),
    deleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
