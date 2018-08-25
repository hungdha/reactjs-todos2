import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// import TodoMenu from './TodoMenu';
class TodoList extends Component {

    
    render() {
    
        return (
            
                <ul style={{ listStyleType:'none', width:'100%', padding:'0'}}>
                    {
                        this.props.todos.map((todo, index) =>(
                          
                            <li  key={todo.id} style={index % 2 == 0 ? { backgroundColor:'#f4f4f4', padding:'10px 5px'}: { backgroundColor:'#fefefe', padding:'10px 5px'} }>
                                <TodoItem
                                   
                                    {...todo}
                                >
                                </TodoItem>
                                
                            </li>
                        )
                        
                        )
                    }             
                </ul>
              
        );
    }
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired).isRequired
  
  }
export default TodoList;