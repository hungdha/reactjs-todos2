import React from 'react';
import { connect } from 'react-redux';
// components
import TodoList from '../components/TodoList';
// actions
import {VisibilityFilters,  fetchTodos } from '../actions/todos';

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
import {PER_PAGE} from '../constants';
import queryString from 'query-string';
import Pagination from '../components/Pagination/Pagination';
class VisibleTodoList extends React.Component{
	
	//initial
	constructor(props){
		super(props);
		this.state = {
			activePage: 1
		  };
	}

	// mounting After render()
  	componentDidMount(){
		const values = queryString.parse(this.props.location.search);
		const params = {
			_start : values && ( values.page - 1 ) * PER_PAGE || 0
		};
		if(  Object.keys(values).length !== 0 ) {
			params.completed = values.completed == 1
		}
		this.props.fetchTodos(params);
		// dispatch(fetchUsers());
		/* this.setState({
			inc : this.state.inc + 1
		}) */
  	}
	
	// updating before render()
	componentWillUpdate(nextProps, nextState){
		console.log('componentWillUpdate')
		const queryObject = queryString.parse(this.props.location.search);
		if( nextState.activePage != queryObject.page ){
			this.setState({
				activePage : queryObject.page
			})
		}
	}  
	// updating After render()
	componentDidUpdate(prevProps, prevState){
		const currentValues = queryString.parse(this.props.location.search);
		const prevValues = queryString.parse(prevProps.location.search);
		if( prevValues.completed != currentValues.completed || 
		 prevValues.page != currentValues.page
		){
			const params = {
				_start : currentValues && (currentValues.page - 1) * PER_PAGE || 0
			};
			if( Object.keys(currentValues).length !== 0  )
				params.completed = currentValues.completed == 1;
			this.props.fetchTodos(params);
		}
	}

	// updating new props and new state
	componentWillReceiveProps(nextProps ){
		
	}

	componentDidCatch(){
		console.log('componentDidCatch')
	}
  	handlePageChange(pageNumber){
		// const { match } = this.props;
		this.setState({
			activePage : pageNumber
		})
		this.props.fetchTodos({
			completed : true,
			_start : (pageNumber - 1) * PER_PAGE,
			_limit : PER_PAGE
		})
	}
    render(){
		// const {todos, match, location} = this.props;
		const { 
			todosList
		} = this.props
		console.log('xxx', this.state.activePage)
		return (
			<div>
				<TodoList {...this.props} />
				<Pagination 
					activePage = { this.state.activePage}
					itemsCountPerPage={PER_PAGE}
					totalItemsCount={todosList.totalItemsCount}
					pageRangeDisplayed={5}
					onChange={ () => this.handlePageChange }
					getPageUrl={ (url) => url }
				/>
			</div>
		)
  	}
}
// map state to props
const mapStateToProps = (state, ownProps) => ({
	// todos: getVisibleTodos(state.todos.items, state.visibilityFilter),
	// todos : state.todos,
	todosList : state.todos.todosList,
	paramsFilters : state.todos.paramsFilters,
	assigned : state.assigned,
	isEditing : state.isEditing
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  	fetchTodos: (params) => dispatch(fetchTodos(params))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VisibleTodoList)