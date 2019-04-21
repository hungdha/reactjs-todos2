import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// import { fetchTodos } from '../actions/todos';
import {PER_PAGE} from '../../constants';
import Comments from '../Comments';
import CommentForm from '../CommentForm';
// import TodoMenu from './TodoMenu';
class TodoList extends Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
        const {todosList, comments } = this.props;
        return (
                <div>
                { todosList.loading ? (
                    <div>
                    <p>Loading...</p>
                    </div>
                ) : 
                ( <ol style={{ listStyle:'none', width:'100%', padding:'0'}}>
                    {
                        todosList.todos.map((todo, index) =>(
                          
                            <li  key={todo.id} style={index % 2 == 0 ? { backgroundColor:'#f4f4f4', padding:'10px 5px'}: { backgroundColor:'#fefefe', padding:'10px 5px'} }>
                                Todo ID {todo.id}
                                <TodoItem todo={todo} />                            
                                <CommentForm />
                                <Comments comments={comments}/>
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