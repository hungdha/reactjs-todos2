import React from 'react';
import { connect } from 'react-redux';
// components
import TodoList from '../components/TodoList';
// actions
import {VisibilityFilters,  fetchTodos} from '../actions';
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
    dispatch(fetchTodos({
      completed : stt
    }));
  }
  

  componentDidUpdate(prevProps, prevState){
    const { dispatch, match } = this.props;
    const stt = match.params.status;
    // console.log('componentDidUpdate 222')
    if(prevProps.match.params.status != this.props.match.params.status ){
      dispatch(fetchTodos({
        completed : stt
      }));
    }
  }

  handlePage(page){
    const {dispatch, match} = this.props;
    dispatch(fetchTodos({
        completed : match.params.status,
        _start : (page - 1) * PER_PAGE,
        _limit : PER_PAGE
    })) 
	}
  	render(){
    	const {todos, dispatch } = this.props;
        const pages = Math.ceil(todos.total / PER_PAGE);
		return (
		<div style={{opacity: todos.isFetching ? 0.1 : 1 }}>
			<TodoList {...this.props} />
			<Paging pages={pages} handleClick={this.handlePage.bind(this)} />
		</div>
		)
  	}
}
// map state to props
const mapStateToProps = (state, ownProps) => 
{
  return {
      // todos: getVisibleTodos(state.todos.items, state.visibilityFilter),
      todos : state.todos,
      assigned : state.assigned,
      isEditing : state.isEditing
  }
}

export default connect(
  mapStateToProps
)(VisibleTodoList)