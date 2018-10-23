import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
const styles = {
    active : {
        backgroundColor : '#000'
    }
}

const pStyle = {
    fontSize: '15px',
    textAlign: 'center'
  };
class Menu extends Component {
    render() {
        return (    
            <div className="container" style={pStyle}>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink exact to="/home" activeClassName="active"  >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/todos" 
                        activeClassName="active">Todos</NavLink>
                        <ul>
                            <li>
                            <NavLink to="/todo/create" 
                        activeClassName="active">Create a Todo</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">   
                        <NavLink to="/users"
                        activeClassName="active"
                        >Users</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login"
                            >Login</NavLink>
                    </li>
                    <li className="nav-item"> 
                        <NavLink to="/register"
                        >Register</NavLink>
                    </li>
                    <li className="nav-item"> 
                        <NavLink to="/gamemini"
                        >Game Mini</NavLink>
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