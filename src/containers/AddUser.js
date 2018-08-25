import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addUser } from '../actions';
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    
    saveUser(event){
        event.preventDefault();
        let {dispatch} = this.props;
        dispatch(addUser(this.textInput.current.value));
        this.textInput.current.value = ''
    }
    render() {
        return (
            <form onSubmit={this.saveUser.bind(this)}>
                <input type="text" ref={this.textInput} placeholder="add user here" />
                <button type="submit">Add User</button>
            </form>
        );
    }
}

export default connect()(AddUser);