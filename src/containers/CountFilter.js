import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VisibilityFilters } from '../actions/todos';

class Counter extends Component {
    render() {
        return (
            <span>
                {this.props.counter}
            </span>
        );
    }
}


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
}


  const mapStateToProps = (state, ownProps) => (
    {
        active : ownProps.filter === state.visibilityFilter,
        counter : getVisibleTodos(state.todos, ownProps.filter).length,
        // countActive : getVisibleTodos(state.todos, ownProps.filter),
        // countCompleted : getVisibleTodos(state.todos, ownProps.filter)
    }
  )

export default connect(mapStateToProps)(Counter);