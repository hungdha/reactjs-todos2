import { connect } from 'react-redux';
// components
import TodoList from '../components/TodoList';
// actions
import {VisibilityFilters} from '../actions';

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

// map state to props
const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    assigned : state.assigned,
    isEditing : state.isEditing
})


// map dispatch to props
const mapDispatchToProps = (dispatch, ownProps) => ({

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)