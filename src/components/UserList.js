import React, { Component } from 'react';
import AddUser from '../containers/AddUser';

class UserList extends Component {
    countAssign(uid){
        let {assigned} = this.props;
        return assigned.filter( (obj) => (
            obj.userid == uid
        )).length;
    }
    render() {
        return (
            <div>
                <AddUser />
                <ul>
                    {
                        this.props.users.map( (user) => (
                            <li key={user.id}>UID: {user.id}, Name: {user.name}, Assigned ({this.countAssign(user.id)})</li>
                        ))
                    } 
                </ul>
            </div>
        );
    }
}

export default UserList;