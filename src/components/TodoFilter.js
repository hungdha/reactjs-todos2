import React, { Component } from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
// import {connect} from 'react-redux';
import CountFilter from '../containers/CountFilter';
class TodoFilter extends Component {
    render() {
        return (
            <div>
                <span>Filter: </span>
                <FilterLink filter={VisibilityFilters.SHOW_ALL} >
                    All
                    (<CountFilter filter={VisibilityFilters.SHOW_ALL} >
                        ({this.props.counter})
                    </CountFilter>)
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} >Active (
                    <CountFilter filter={VisibilityFilters.SHOW_ACTIVE} >
                        ({this.props.counter})
                    </CountFilter>)
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} >Completed(
                    <CountFilter filter={VisibilityFilters.SHOW_COMPLETED} >
                        ({this.props.counter})
                    </CountFilter>)</FilterLink>
            </div>
        );
    }
}


export default TodoFilter;