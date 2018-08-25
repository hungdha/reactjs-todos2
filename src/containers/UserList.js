// import React, { Component } from 'react';
import UserList from '../components/UserList';
import {connect} from 'react-redux';
const mapStateToProps = (state, ownProps) => ({
    users : state.users,
    assigned : state.assigned
})

const mapDispatchToProps = (dispatch, ownProps) => ({

})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);