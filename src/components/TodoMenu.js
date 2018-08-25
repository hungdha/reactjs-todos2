import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TodoMenu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/todos/all'>All</Link> | 
                        <Link to='/todos/active'>Active</Link> |
                        <Link to='/todos/completed'>Completed</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TodoMenu;