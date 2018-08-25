import data from '../api/data'
import _todos from '../api/data.json'
let nextTodoId = _todos.length + 1

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text 
})

export const deleteTodo = id => ({
    type : 'DELETE_TODO',
    id : id
})

export const receiveTodos = todos => (
    {
    type: 'RECEIVE_TODOS',
    todos
})
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const editTodo = id => ({
    type: 'EDIT_TODO',
    id
})

export const updateTodo = todo => ({
    type: 'UPDATE_TODO',
    todo
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const getAllTodos = () => dispatch => {
    data.getTodos(todos => {
        dispatch(receiveTodos(todos))
    })
}



export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})




//===========================================
// USER
import user from '../api/user.json';
const totalUser = user.length;
export const receiveUsers = users => (
    {
    type: 'RECEIVE_USERS',
    users
})

export const addUser = (name) =>({
    type : 'ADD_USER',
    name
})
export const getAllUsers = () => dispatch => {
    data.getUsers(users => {
        dispatch(receiveUsers(users))
    })
}


// ====================================
// Assignment
export const assignUsers = ( users, todoid ) => (
    {
        type : 'ASSIGN',
        users,
        todoid
    }
)