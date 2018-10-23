import React, { Component } from 'react';
import UserFormContainer from '../containers/UserFormContainer';
import UsersContainer from '../containers/UsersContainer';
class Users extends Component {
    render() {
        return (
            <div>
                <UserFormContainer />
                <UsersContainer />
            </div>
        );
    }
}

export default Users;