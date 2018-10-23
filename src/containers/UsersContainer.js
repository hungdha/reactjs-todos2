import React, { Component } from 'react';

import {connect} from 'react-redux';
import {fetchUsers, deleteUser} from '../actions/users';
import UserList from '../components/UserList';
import UserItem from '../components/UserItem';

class UsersContainer extends Component {
    
    componentWillMount(){
        this.props.fetchUsers({id: 1});
    }
    
   /*  countAssign(uid){
        let {assigned} = this.props;
        return assigned.filter( (obj) => (
            obj.userid == uid
        )).length;
    } */
    render() {
        // console.log(this.props.fetchUsers({id:'1'}));

        const { usersList,  addItem, deleteItem/* , editItem, toggleItem */ } = this.props;
        // console.log(usersList)
        return (
            <div>
                <h1>{ usersList.error }</h1>
                { !usersList.loading ?  
                (<UserList title="Users">
                { 
                    usersList.users.map( (user) => (
                        <UserItem 
                            key={user.id} 
                            user={user}
                        />
                    ))
                }
                </UserList> ) : (<h1>Loading...</h1>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    /* users : state.users,
    assigned : state.assigned, */
    usersList : state.users.usersList,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    /* deleteItem : (id) => {
        console.log('dleete item' , id);
        return dispatch(deleteUser(id)); 
    },
    addItem : (name) => dispatch(addUser(name)),
    fetchItems : () => dispatch(fetchUsers()), */
    //editItem : (id) => dispatch(editUser(id)),
    //toggleItem : (id) => dispatch(toggleUser(id)) 
    fetchUsers : (params) => dispatch( fetchUsers(params) ) 

})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer);