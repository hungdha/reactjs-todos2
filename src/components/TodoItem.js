import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionLink from '../containers/ActionLink';
import EditTodo from '../containers/EditTodo';
import AssignLink from '../containers/AssignLink';
import AssignItem from './AssignItem';

class TodoItem extends Component {
    /* renderUser(){
        let { users, assigns } = this.props;
        if(assigns !== undefined){
            return users.map(user =>{
                let h =  assigns.find( id => {
                    return id == user.id
                })

                if(h != undefined){
                    return (<span>{user.name}</span>)
                }
            });
        }else{
            return (<span>No assign</span>)
        }
    } */


    render() {
        let {id, text, completed } = this.props;
        let hexColor =  completed ? 'red' : 'blue';
        return (
            <div>
                <p style={{color: hexColor }}>{this.props.text}</p>
                <EditTodo id={id} text={text} completed={completed}  />
                <ActionLink id={id} text={text} completed={completed} />
                <AssignLink todoid={id} />
                <AssignItem todoid={id} />
            </div>
        );
    }
}

TodoItem.propTypes = {
    id : PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed : PropTypes.bool.isRequired
}

export default TodoItem