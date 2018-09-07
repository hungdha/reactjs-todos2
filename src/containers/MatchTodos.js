import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
// import TodoMenu from '../components/TodoMenu';
import {Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { VisibilityFilters, addTodo } from '../actions';
// import FilterTodo from './FilterTodo';
import TodoFilter from '../components/TodoFilter';
import TodoMenu from '../components/TodoMenu';
// import ActionLink from './ActionLink';
class MatchTodos extends Component {
   
    render() {
        const {match, dispatch } = this.props;
        // this.filterData(this.props);
        return (
            <div>
                <AddTodo />
                {/* <TodoFilter /> */}
                <TodoMenu />
                <Route path={`${match.path}/:status?`} component={VisibleTodoList} />
            </div>
        );
    }
}

export default connect()(MatchTodos);