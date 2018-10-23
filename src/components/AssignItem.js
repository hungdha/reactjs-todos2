import React, { Component } from 'react';
import {connect} from 'react-redux';
class AssignItem extends Component {

    render() {
        let {users, todoId, assigned} =  this.props;
        let arr = [];
        let assigns = assigned.filter( (item)=>{
            return item.todoId == todoId 
        });
        for( let i =0 ; i < users.length; i++){
             for (let j = 0; j < assigns.length; j++) {
                let obj = assigns[j];
                if( users[i].id == obj.userId ){
                    arr.push(users[i])
                }    
            }        
        }
        return (
            <div> Assigned: 
                {
                    arr.length ? 
                    arr.map( (user, index)=>(
                        <span key={index}>{user.name}, </span>
                    )) : ' empty'
                
                }
            </div>
        );
    }
}


const mapState = (state, ownProps) => ({
    assigned : [],
    users : state.users
})
export default connect(mapState)(AssignItem);