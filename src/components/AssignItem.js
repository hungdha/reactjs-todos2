import React, { Component } from 'react';
import {connect} from 'react-redux';
class AssignItem extends Component {

    render() {
        let {users, todoid, assigned} =  this.props;
        let arr = [];
        let assigns = assigned.filter( (item)=>{
            return item.todoid == todoid 
        });
        console.log('assigns')
        console.log(assigns) 
        
        for( let i =0 ; i < users.length; i++){
             for (let j = 0; j < assigns.length; j++) {
                let obj = assigns[j];
                console.log(obj)
                if( users[i].id == obj.userid ){
                    arr.push(users[i])
                }    
            }        
        
           /*  let result = assigned.filter( (item)=>( item.userid == users[i].id ))
            if(result){
                arr.push(result)
            } */
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
    assigned : state.assigned,
    users : state.users
})
export default connect(mapState)(AssignItem);