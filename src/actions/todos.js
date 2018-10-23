import services from '../api'
// import _todos from '../api/services.json'
import { PER_PAGE } from '../constants'


export const CREATE_TODO_REQUEST = 'CREATE_TODO_REQUEST';
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE';

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_EDITING = 'UPDATE_TODO_EDITING';

export const TOGGLE_TODO_REQUEST = 'TOGGLE_TODO_REQUEST';
export const TOGGLE_TODO_FAILURE = 'TOGGLE_TODO_FAILURE';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';


export const RESET_NEW_TODO = 'RESET_NEW_TODO'

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


export const actionToggleTodo = id => ({
    type: TOGGLE_TODO,
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

/* 
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


    dispatch(requestTodos(_params));
    services.todos.fetchTodos( _params,
        function(todos, total){
            dispatch(receiveTodos(todos, total, _params )) 
            // dispatch(countTotalTodos(+count))
        }
    );
} */



const fetchTodosRequest = request => ({
    type: FETCH_TODOS_REQUEST,
    payload: request
})

const fetchTodosSuccess = (data, total) => ({
    type :FETCH_TODOS_SUCCESS,
    payload : {
        data,
        total
    }
})

const fetchTodosFailure = error => ({
    type : FETCH_TODOS_FAILURE,
    payload: error
})

export function fetchTodos(params){

    // console.log('params....');
    // console.log(params)

    let _params = {}
    if( params != undefined){ 
        _params._start = params.hasOwnProperty('_start') ? params._start : 0;
        _params._limit = params.hasOwnProperty('_limit') ? params._limit : PER_PAGE;
        //if( params.hasOwnProperty('completed')  )
        //    _params.completed =  params.completed  
    }else{
        _params = {
            _start : 0,
            _limit : PER_PAGE
        };
    }
    // _params = {};
    return (dispatch) => {
        
        dispatch(fetchTodosRequest(_params));

        return services.todos.fetchAll( _params).then( (response) => {
            if( response.error)
                dispatch(fetchTodosFailure(response.error.data));
            else{
                
                dispatch( fetchTodosSuccess(response.data, response.headers['x-total-count'] ));
            }
        }).catch ((error) => {
            dispatch(fetchTodosFailure(error.message));
        })
    }
} 

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export function createTodo(params){
    return function(dispatch){
        
        params.createdAt = new Date();
        dispatch(createTodoRequest(params));
        return services.todos.create(params)
            .then( (response) => {
                if(response.error )
                    dispatch(createTodoFailure(response.error.data))
                else
                    dispatch(createTodoSuccess(response.data))
            })
            .catch( error => {
                dispatch(createTodoFailure(error.message))
            })
    }
}

export function resetNewTodo() {
    return {
      type: RESET_NEW_TODO
    }
}

export const createTodoRequest = (request) => ({
    type : CREATE_TODO_REQUEST,
    payload : request
})

export const createTodoSuccess = (todo) => ({
    type : CREATE_TODO_SUCCESS,
    payload : todo
})

export const createTodoFailure = (error) => ({
    type : CREATE_TODO_FAILURE,
    payload : error
})

// DELETE
export const deleteTodoRequest = (request) => ({
    type : DELETE_TODO_REQUEST,
    payload : request
})
export const deleteTodoFailure = (error) => ({
    type : DELETE_TODO_FAILURE,
    payload : error
})
export const deleteTodoSuccess = (todo) => ({
    type : DELETE_TODO_SUCCESS,
    payload : todo
})

export function deleteTodo(id){
    return (dispatch) => {
        dispatch(deleteTodoRequest(id))
        return services.todos.delete(id).then(response => {
            if(response.error)
                dispatch(deleteTodoFailure(response.error.data))
            else
                dispatch(deleteTodoSuccess(response.data))

        }).catch( error => {
            dispatch(deleteTodoFailure(error.message))
        })
    }
}
    
export function updateTodo(todo){
    return (dispatch) => {
        dispatch(updateTodoRequest(todo))
        return services.todos.update(todo).then ( response => {
            if( response.error )
                dispatch( updateTodoFailure(response.error.data))
            else
                dispatch( updateTodoSuccess(response.data))

        }).catch( error => {
            dispatch( updateTodoSuccess(error.message))
        })
    }
}
export function updateTodoEditing(id){
    return {
        type: UPDATE_TODO_EDITING,
        payload : id
    }
}
export const updateTodoRequest = (request) => ({
    type : UPDATE_TODO_REQUEST,
    payload : request
})
export const updateTodoSuccess = (todo) => ({
    type : UPDATE_TODO_SUCCESS,
    payload : todo
})
export const updateTodoFailure = (error) => ({
    type : UPDATE_TODO_FAILURE,
    payload : error
})



export function toggleTodo(todo){
    return (dispatch) => {
        // request
        dispatch( toggleTodoRequest(todo) )
        return services.todos.update({...todo, completed: !todo.completed}).then( response => {
            // response success or failure
            if( response.error )
                dispatch(toggleTodoFailure(response.error.data))
            else
                dispatch(toggleTodoSuccess(response.data))
            
        }).catch( error => {
            // result error message
            dispatch(toggleTodoFailure(error.message))
        });
    }
}

export const toggleTodoRequest = (request) =>  ({
    type : TOGGLE_TODO_REQUEST,
    payload : request
})
export const toggleTodoFailure = (error) =>  ({
    type : TOGGLE_TODO_FAILURE,
    payload : error
})
export const toggleTodoSuccess = (todo) =>  ({
    type : TOGGLE_TODO_SUCCESS,
    payload : todo
})