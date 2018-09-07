import React, { Component } from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
class TodoMenu extends Component {
    
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to='/todos/all' activeClassName="active"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'red'
                        }}
                        >All</NavLink> | 
                        <NavLink to='/todos/active' activeClassName="active">Active</NavLink> |
                        <NavLink to='/todos/completed' activeClassName="active">Completed</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}


export default withRouter(connect()(TodoMenu));