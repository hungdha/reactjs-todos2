import services from '../api'
// import _todos from '../api/services.json'
import { PER_PAGE } from '../constants'
// let nextTodoId = _todos.length + 1


export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const RECEIVE_TODOS = 'RECEIVE_TODOS'
export const TOTAL_TODOS = 'TOTAL_TODOS'
export const EDIT_TODO = 'EDIT_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const COUNT_TOTAL_TODOS = 'COUNT_TOTAL_TODOS'
export const REQUEST_TODOS = 'REQUEST_TODOS'

export const actionAddTodo = todo => ({
    type: ADD_TODO,
    todo 
})


export const removeTodo = id => ({
    type : 'DELETE_TODO',
    id : id
})


const receiveTodos = (todos, total, params) => (
    {
    type: RECEIVE_TODOS,
    params,
    todos: todos,
    total,
    receivedAt: Date.now()
})

export const actionToggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const editTodo = id => ({
    type: EDIT_TODO,
    id
})

export const actionUpdateTodo = todo => ({
    type: UPDATE_TODO,
    todo
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export const getAllTodos = (params) => dispatch => {
    let _params = {}
    if( params != undefined){ 

        if( params.hasOwnProperty('completed') && params.completed != 'all'){
            _params.completed =  (params.completed == 'active') ? false : true;
        }
        _params._start = params.hasOwnProperty('_start') ? params._start : 0;
        _params._limit = params.hasOwnProperty('_limit') ? params._limit : PER_PAGE;
             
    }else{
        _params = {
            _start : 0,
            _limit : PER_PAGE
        };
    }

    // console.log(services.todos);

    dispatch(requestTodos(_params));
    services.todos.fetchTodos( _params,
        function(todos, total){
            dispatch(receiveTodos(todos, total, _params )) 
            // dispatch(countTotalTodos(+count))
        }
    );
}


function requestTodos(params) {
  return {
    type: REQUEST_TODOS,
    params
  }
}
export function fetchTodos(params){
    let _params = {}
    if( params != undefined){ 

        if( params.hasOwnProperty('completed') && params.completed != 'all'){
            _params.completed =  (params.completed == 'active') ? false : true;
        }
        _params._start = params.hasOwnProperty('_start') ? params._start : 0;
        _params._limit = params.hasOwnProperty('_limit') ? params._limit : PER_PAGE;
             
    }else{
        _params = {
            _start : 0,
            _limit : PER_PAGE
        };
    }
    return function(dispatch){
        dispatch(requestTodos(_params));
        services.todos.fetchTodos( _params,
            function(todos, total){
                dispatch(receiveTodos(todos, total, _params )) 
                // dispatch(countTotalTodos(+count))
            }
        );
    }
} 

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export function addTodo(params){
    return function(dispatch){
        dispatch(requestTodos);
        services.todos.insertTodo(params, function(res){
            dispatch(actionAddTodo(res))
        })
    }
}

export function deleteTodo(id){
    return (dispatch) => {
        services.todos.deleteTodo(id,
            function(res){
                dispatch(removeTodo(id))
            }
        )
    }
}
    
export function updateTodo(todo){
    return (dispatch) => {
        services.todos.updateTodo(todo, function(res){
            dispatch(actionUpdateTodo(res))
        })
    }
}

export function toggleTodo(todo){
    return (dispatch) => {
        services.todos.updateTodo({...todo, completed: !todo.completed}, function(res){
            dispatch(actionToggleTodo(todo.id))
        })
    }
}


//===========================================
// USER
import user from '../api/user.json';
const totalUser = user.length;
export const receiveUsers = users => (
    {
    type: 'RECEIVE_USERS',
    users
})

export const addUser2 = (name) =>({
    type : 'ADD_USER',
    name
})

export const getAllUsers = () => dispatch => {
    services.users.fetchUsers(
        {}    
        ,users => {
            dispatch(receiveUsers(users))
        }
    )
}

export function addUser(title){
    return (dispatch) => {
        services.addUser()
    }
}

// ====================================
// Assignment
export const assignUsers = ( users, todoId ) => (
    {
        type : 'ASSIGN',
        users,
        todoId
    }
)
