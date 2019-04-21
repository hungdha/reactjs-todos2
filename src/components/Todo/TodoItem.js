import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionLinkContainer from '../../containers/ActionLinkContainer';
import TodoFormQuickEditContainer from '../../containers/TodoFormQuickEditContainer';
import AssignLinkContainer from '../../containers/AssignLinkContainer';
import AssignItem from '../AssignItem';

class TodoItem extends Component {
    render() {
        let {todo} = this.props;
        let hexColor =  todo.completed ? 'red' : 'blue';
        return (
            <div>
                <div style={{color: hexColor }}>
                    <h3 >{todo.title}</h3>
                    <p>{todo.content}</p>
                    <p>{todo.createdAt}</p>
                </div>
                <hr />
                <TodoFormQuickEditContainer todo={todo}  />
                <ActionLinkContainer todo={todo}/>
                <AssignLinkContainer todo={todo} />
                <AssignItem todo={todo} />
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo : PropTypes.shape({
        id : PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed : PropTypes.bool.isRequired,
        createdAt : PropTypes.string,
    })
}

export default TodoItem