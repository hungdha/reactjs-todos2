import React from 'react';
import { connect } from 'react-redux';
// components
import TodoList from '../components/TodoList';
// actions
import {VisibilityFilters, getAllTodos} from '../actions';
import axios from 'axios';
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
import Paging from '../components/Paging';
import {PER_PAGE} from '../constants';

class VisibleTodoList extends React.Component{
  
  componentDidMount(){
    const { dispatch, match } = this.props;
    const stt = match.params.status;
    dispatch(getAllTodos());
    // getAllTodos(stt);
  }
  componentDidUpdate(prevProps, prevState){
    const { dispatch, match } = this.props;
    const stt = match.params.status;
    if(prevProps.match.params.status != this.props.match.params.status ){
      dispatch(getAllTodos({
        completed : stt
      }));
    }
  }

  handlePage(page){
    const {dispatch, match} = this.props;
    dispatch(getAllTodos({
        completed : match.params.status,
        _start : (page - 1) * PER_PAGE,
        _limit : PER_PAGE
    })) 
	}
  	render(){
    	const {todos, countTotalTodos, dispatch } = this.props;
        const pages = Math.ceil(countTotalTodos/ PER_PAGE);
		return (
		<div>
			<TodoList {...this.props} />
			<Paging pages={pages} handleClick={this.handlePage.bind(this)} />
		</div>
		)
  	}
}
// map state to props
const mapStateToProps = (state, ownProps) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    countTotalTodos : state.countTodos,
    assigned : state.assigned,
    isEditing : state.isEditing
})

export default connect(
    mapStateToProps
)(VisibleTodoList)