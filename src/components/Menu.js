import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
class Menu extends Component {
    render() {
        return (    
            <div>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink exact to="/home" activeClassName="active"  >Home</NavLink> | 
                    </li>
                    <li className="nav-item">
                        <NavLink to="/todos" 
                        activeClassName="active">Todos</NavLink>
                    </li>
                    <li className="nav-item">   
                        <NavLink to="/users"
                        activeClassName="active"
                        >Users</NavLink>
                    </li>
                </ul>
            </div>
           
            
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    totalTodo : state.todos.length,
    totalAssignment : state.users.length
})
export default Menu;
// export default connect(mapStateToProps)(Menu);