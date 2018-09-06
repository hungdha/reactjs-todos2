import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../components/Home';
import VisibleTodoList from '../containers/VisibleTodoList';
import {connect} from 'react-redux';
class Menu extends Component {
    render() {
        return (    
            <div>
                <ul className="nav">
                    <li className="nav-item ">
                        <Link to="/" >Home</Link> | 
                    </li>
                    <li className="nav-item active">
                        <Link to="/todos">Todos ({this.props.totalTodo})</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users">Users ({this.props.totalAssignment })</Link>
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

export default connect(mapStateToProps)(Menu);