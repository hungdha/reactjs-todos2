import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createUser, fetchUsers} from '../actions/users';
import UserForm from '../components/UserForm';

const mapStateToProps = (state, ownProps) =>({
    newUser : state.users.newUser
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onAddUser : (params) => dispatch(createUser(params) ).then( () => {
        dispatch(fetchUsers())
    })
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);