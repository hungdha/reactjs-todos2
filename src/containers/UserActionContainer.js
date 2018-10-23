import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser, fetchUsers } from '../actions/users';


class UserActionContainer extends Component{
    render(){
        const { onDeleteClick, deletedUser } = this.props;
        return (
            <div>

                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-success">Active</button>
                <button onClick={onDeleteClick} className="btn btn-danger" >Delete</button> 

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>  {
  return { 
    deletedUser: state.users.deletedUser,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	 onDeleteClick: () => {
        dispatch(deleteUser(ownProps.userId)).then( (response)=> {
            dispatch(fetchUsers())
        })
  	 },
     onUpdateClick: () => {

     },
     onActiveClick: () => {

     }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserActionContainer);