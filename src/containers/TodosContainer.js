import React, { Component } from 'react';
// import TodoFormContainer from '../containers/TodoFormContainer';
import VisibleTodoListContainer from '../containers/VisibleTodoListContainer';
// import TodoMenu from '../components/TodoMenu';
import {Route } from 'react-router-dom';
import {connect} from 'react-redux';
// import TodoFilter from '../components/TodoFilter';
import TodoMenu from '../components/TodoMenu';



class TodosContainer extends Component {
    
    render() {
        const {match, dispatch } = this.props;
        // this.filterData(this.props);
        return (
            <div>
                <TodoMenu />
                <Route path={`${match.path}`} component={VisibleTodoListContainer} />
            </div>
        );
    }
}

export default connect()(TodosContainer);