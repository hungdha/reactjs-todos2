import React, { Component } from 'react';
import UserActionContainer from '../containers/UserActionContainer';
class UserItem extends Component {
    
    render() {
        const {user, onDeleteItem } = this.props;
        return (
            <div>
                <div >
                    <span> ID : {user.id},
                        Fullname: {user.fullname},
                        Phone: {user.phone}
                        Email: {user.email}
                        Birthday: {user.birthday}
                    </span>
                </div>
                <UserActionContainer userId={user.id} />
            </div>
        );
    }
}

export default UserItem;