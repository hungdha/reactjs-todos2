import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionLink from '../containers/ActionLink';
import EditTodo from '../containers/EditTodo';
import AssignLink from '../containers/AssignLink';
import AssignItem from './AssignItem';

class TodoItem extends Component {
    render() {
        let {id, title, completed } = this.props;
        let hexColor =  completed ? 'red' : 'blue';
        return (
            <div>
                <p style={{color: hexColor }}>{this.props.title}</p>
                <EditTodo id={id} title={title} completed={completed}  />
                <ActionLink id={id} title={title} completed={completed} />
                <AssignLink todoId={id} />
                <AssignItem todoId={id} />
            </div>
        );
    }
}

TodoItem.propTypes = {
    id : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed : PropTypes.bool.isRequired
}

export default TodoItem