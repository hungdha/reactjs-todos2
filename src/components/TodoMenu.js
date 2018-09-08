import React, { Component } from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
class TodoMenu extends Component {
    
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to='/todos/all' activeClassName="selected"
                        
                        >All</NavLink> | 
                        <NavLink to='/todos/active' activeClassName="selected">Active</NavLink> |
                        <NavLink to='/todos/completed' activeClassName="selected">Completed</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}


export default withRouter(connect()(TodoMenu));