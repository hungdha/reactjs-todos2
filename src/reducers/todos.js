import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, CREATE_TODO_REQUEST, CREATE_TODO_SUCCESS, CREATE_TODO_FAILURE, RESET_NEW_TODO, UPDATE_TODO_EDITING, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE, TOGGLE_TODO_REQUEST, TOGGLE_TODO_FAILURE, TOGGLE_TODO_SUCCESS } from "../actions/todos";
import { DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS } from "../actions/users";

const initialState = {
    paramsFilters : null, 
    todosList : { todos : [], error: null, loading : false, totalItemsCount: 0 },
    newTodo : { todo : null, error: null, loading : false},
    deleteTodo : { todo : null, error: null, loading : false},
    updateTodo : { todo : null, error: null, loading : false, editing : null },
    toggleTodo : { todo : null, error: null, loading : false  },
}
const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'INVALIDATE_TODOS':
            return Object.assign({}, state, {
                didInvalidate : true
            });
        case FETCH_TODOS_REQUEST:
             return Object.assign({}, state, {
                paramsFilters : action.payload,
                todosList : Object.assign({}, state.todosList, {
                    loading : true
                })
            })
            
        case FETCH_TODOS_SUCCESS:
            return Object.assign({}, state, {
                todosList:{
                    todos : action.payload.data,
                    loading : false,
                    totalItemsCount : +action.payload.total // + convert string to number 
                }
            }) 
        case  FETCH_TODOS_FAILURE:
            return Object.assign({}, state, {
                todosList:{
                    error : action.payload,
                    loading : false
                }
            })
            
        case CREATE_TODO_REQUEST:
            return Object.assign({}, state, {
                newTodo : Object.assign({}, state.newTodo, {
                    loading : true
                })
            })            


        case CREATE_TODO_SUCCESS:
            return Object.assign({}, state, {
                newTodo : Object.assign({}, state.newTodo, {
                    loading : false,
                    todo : action.payload
                })
            })  
        case CREATE_TODO_FAILURE:
            return Object.assign({}, state, {
                newTodo : Object.assign({}, state.newTodo, {
                    loading : false,
                    error : action.payload
                })
            })  
        case RESET_NEW_TODO:
            return Object.assign({}, state, {
                newTodo : Object.assign({}, state, {
                    todo : null,
                    loading : false,
                    error :null
                })
            })
        case TOGGLE_TODO_REQUEST:
            return Object.assign({}, state, {
                toggleTodo:{
                    todo : action.payload,
                    loading : true
                }
            })
        case TOGGLE_TODO_FAILURE:
            return Object.assign({}, state, {
                toggleTodo:{
                    error: action.payload,
                    loading : false
                }
            })
        case TOGGLE_TODO_SUCCESS:
            return Object.assign({}, state, {
                toggleTodo:{
                    todo: action.payload,
                    loading : false
                }
            })
        case DELETE_USER_REQUEST:
            return Object.assign({}, state, {
                deleteTodo : Object.assign({}, state.deleteTodo, {
                    todo : action.payload, 
                    loading : true
                })
            } )
        case DELETE_USER_FAILURE:
            return Object.assign({}, state, {
                deleteTodo : Object.assign({}, state.deleteTodo, {
                    todo : null, 
                    loading : false
                })
            } )
       
        case DELETE_USER_SUCCESS:
            return Object.assign( {}, state, {
                deleteTodo : Object.assign({}, state.deleteTodo, {
                    todo : action.payload,
                    loading : false,
                } )
            })

        case UPDATE_TODO_EDITING:
            return Object.assign( {}, state, {
                updateTodo : Object.assign({}, state.updateTodo, {
                    editing : action.payload
                } )
            })
        case UPDATE_TODO_REQUEST:
            return Object.assign( {}, state, {
                updateTodo : Object.assign({}, state.updateTodo, {
                    loading : true
                } )
            })
        case UPDATE_TODO_SUCCESS:
            return Object.assign( {}, state, {
                updateTodo : Object.assign({}, state.updateTodo, {
                    loading : false,
                    todo : action.payload
                } )
            })
        case UPDATE_TODO_FAILURE:
            return Object.assign( {}, state, {
                updateTodo : Object.assign({}, state.updateTodo, {
                    loading : false,
                    error : action.payload
                } )
            })
        default:
            return state
    }

}

export default todos;