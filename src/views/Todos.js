import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo';
import TodosContainer from '../containers/TodosContainer';

class Todos extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodosContainer />
            </div>
        );
    }
}

export default Todos;