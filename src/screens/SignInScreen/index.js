import React from 'react';
import { connect } from "react-redux";
import SignInScreen from "./SignInScreen";
import { editCredentials, signIn, resetData } from "redux/actions/Auth";

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password,
});

const mapDispatchToProps = (dispatch) => ({
  editCredentials: (key, value) => dispatch(editCredentials(key, value)),
  signIn: () => dispatch(signIn()),
  resetData: () => dispatch(resetData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
