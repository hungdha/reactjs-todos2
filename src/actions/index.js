import data from '../api/data'
import _todos from '../api/data.json'
import { PER_PAGE } from '../constants'
let nextTodoId = _todos.length + 1

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text 
})

export const removeTodo = id => ({
    type : 'DELETE_TODO',
    id : id
})

export const receiveTodos = (todos, total) => (
    {
    type: 'RECEIVE_TODOS',
    todos,
    total
})

export const totalTodos = (total) => (
    {
    type: 'TOTAL_TODOS',
    total
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const editTodo = id => ({
    type: 'EDIT_TODO',
    id
})

export const updateTodo2 = todo => ({
    type: 'UPDATE_TODO',
    todo
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const countTotalTodos = (count) =>({
    type : 'COUNT_TOTAL_TODOS',
    count
});


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
    data.getTodos( _params,
        function(todos, count){
            dispatch(receiveTodos(todos)) 
            dispatch(countTotalTodos(+count))
        }
    );
}



export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})


export function deleteTodo(id){
    return (dispatch) => {
        data.deleteTodo(id,
            function(res){
                dispatch(removeTodo(id))
            }
        )
    }
}
    
export function updateTodo(todo){
    return (dispatch) => {
        data.updateTodo(todo, function(res){
            dispatch(updateTodo2(todo))
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
    data.getUsers(
        {}    
        ,users => {
            dispatch(receiveUsers(users))
        }
    )
}

export function addUser(title){
    return (dispatch) => {
        data.addUser()
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
