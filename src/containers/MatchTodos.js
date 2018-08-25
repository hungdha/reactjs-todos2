import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
// import TodoMenu from '../components/TodoMenu';
import {Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { VisibilityFilters, addTodo } from '../actions';
// import FilterTodo from './FilterTodo';
import TodoFilter from '../components/TodoFilter';
// import ActionLink from './ActionLink';
class MatchTodos extends Component {
   
    filterData({match, dispatch})
    {
        // console.log(match);
        // console.log(dispatch);

        const status = match.params.status;
        // console.log('dddd')
        // console.log(status);
        
        switch(status){
            case 'completed':
                dispatch(VisibilityFilters.SHOW_COMPLETED);
            break;
            case 'active':
                dispatch(VisibilityFilters.SHOW_ACTIVE)
            break;
            default : 
                dispatch(VisibilityFilters.SHOW_ALL)
            break;
        }
    }
    componentDidMount(){
        console.log('componentDidMount')
        // const param = this.props.match.params.status;
        // const { dispatch }  = this.props;
        // console.log('dispath here debug.')
        // this.filterData(this.props);
        // console.log(dispatch);

    }
    componentDidUpdate(){
        // console.log('comdid update');
        // console.log(this.props.dispatch);
        // console.log('match did update');
        // console.log(this.props.dispatch);
        // this.filterData(this.props);

    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
        // console.log('com will update');
        // console.log(this.props.dispatch);
        // console.log('match did update');
        // console.log(this.props.dispatch);
        // this.filterData(this.props);
    }
    componentWillMount(){
        // console.log(this.props.match);
        const { dispatch} = this.props;
        
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
                /* if (nextProps.fullName !== this.props.fullName) {
                  loadData(nextProps);
                } */
            }
    render() {
        const {match, dispatch } = this.props;
        // this.filterData(this.props);
        // console.log("todos")
        // console.log(this.props.todos);
        return (
            <div>
                <AddTodo />
                <TodoFilter />
                <Route path={`${match.path}/:status?`} component={VisibleTodoList} />
            </div>
        );
    }
}

export default connect()(MatchTodos);