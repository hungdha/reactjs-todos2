import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../actions';
class AddTodo extends Component {
    saveTodo(event){
        event.preventDefault();
        let todo = this.refs.todo.value;
        let {dispatch} = this.props;
        dispatch(addTodo(todo));
        this.refs.todo.value  = '';
    }
    render() {
       
        return (
            <form onSubmit={this.saveTodo.bind(this)}>
                <input type="text"  ref="todo" placeholder="add todo here ..." />
                <button type="submit">Add todo</button>
            </form>
        );
    }
}

export default connect()(AddTodo);