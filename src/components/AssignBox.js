import React, { Component } from 'react';
import SelectCheckbox from './SelectCheckbox';
// import {connect} from 'react-redux';
import { assignUser } from '../actions';

class AssignBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            value : '0'
        }

        // this.handleAssign = this.handleAssign.bind(this);
        
    }
    handleAssign(uids){
        /* let {dispatch, todoid } = this.props;
        if(uids.length > 0){
            uids.map((user) => {
                dispatch(assignUser({
                    userid: user.id,
                    todoid:todoid
                }))
            })
        } */
    }

    render() {
        return (
            <div>
                <SelectCheckbox data={this.props.users} 
                onDone={this.handleAssign.bind(this)}    
                 />
            </div>
        );
    }
}


export default AssignBox