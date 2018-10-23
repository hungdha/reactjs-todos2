import React, { Component } from 'react';
import UserItem from '../components/UserItem';

class UserList extends Component {

    render() {
        const { title, children } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <div>{children}</div>
            </div>
        );
    }
}

export default UserList;