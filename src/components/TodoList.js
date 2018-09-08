import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// import { fetchTodos } from '../actions';
import {PER_PAGE} from '../constants';
// import TodoMenu from './TodoMenu';
class TodoList extends Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
        const {todos, countTotalTodos, dispatch } = this.props;
        return (
                <div>
                { todos.isFetching ? (
                    <div>
                    <p>Loading...</p>
                    </div>
                ) : 
                ( <ol style={{ width:'100%', padding:'0'}}>
                    {
                        todos.items.map((todo, index) =>(
                          
                            <li  key={todo.id} style={index % 2 == 0 ? { backgroundColor:'#f4f4f4', padding:'10px 5px'}: { backgroundColor:'#fefefe', padding:'10px 5px'} }>
                                <TodoItem
                                   
                                    {...todo}
                                >
                                </TodoItem>
                                
                            </li>
                        )
                        
                        )
                    }       

                </ol>)
                }
                </div>
              
        );
    }
}
// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       title: PropTypes.string.isRequired
//     }).isRequired).isRequired
  
//   }
export default TodoList;