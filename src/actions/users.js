

//===========================================
// USER
import user from '../api/user.json';

import services from '../api'
// import _todos from '../api/services.json'
// import { PER_PAGE } from '../constants'
// let nextTodoId = _todos.length + 1
const ROOT_URL = 'http://localhost:3000';

const totalUser = user.length;

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';


export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';

export const SET_USER_FORM = 'SET_USER_FORM';


export const fetchUsersRequest = request => ({
    type: FETCH_USERS_REQUEST,
    payload: request
})
export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsersFailure = error => ({
    type : FETCH_USERS_FAILURE,
    payload: error
})

export function fetchUsers(params){
    return (dispatch) => {

        dispatch(fetchUsersRequest(params));

        return services.users.fetchUsers( params ).then( (response) => {
            if(response.error)
                dispatch(fetchUsersFailure(response.error.data))
            else
                dispatch(fetchUsersSuccess(response.data))
        }).catch( (error) => {
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

// CREATE

export const createUserRequest = request => {
    
    return {
        type: CREATE_USER_REQUEST,
        payload: request
    };
}

export const createUserSuccess = users => {
    return {
        type : CREATE_USER_SUCCESS,
        payload : users
    }
}

export const createUserFailure = error => {
    return {
        type : CREATE_USER_FAILURE,
        payload : error
    }
}

export function createUser(params){
    return (dispatch) => {
        dispatch(createUserRequest(params));
        return services.users.insert(params).then( (response)=>{
            if(response.error)
                dispatch(createUserFailure(response.error.data))
            else
                dispatch(createUserSuccess(response.data))
        }).catch( error => {
            dispatch(createUserFailure(error.message))
        })
    }
}


// DELETE
const deleteUserRequest = request => ({
    type : DELETE_USER_REQUEST,
    payload : request
})
const deleteUserFailure = error => ({
    type : DELETE_USER_FAILURE,
    payload : error
})

const deleteUserSuccess = user => ({
    type :  DELETE_USER_SUCCESS,
    payload : user
})

export function deleteUser(params){
    // return a function
    return (dispatch) => {
        dispatch(deleteUserRequest(params))
        return services.users.delete(params).then( (response)=> {
            if(response.error)
                dispatch(deleteUserFailure(response.error.date))
            else
                dispatch(deleteUserSuccess(response.data))

        }).catch( (error)=>{
            dispatch(deleteUserFailure(error.message))
        })
    }
}

// SET USER FORM
export const setUserForm = user => ({
    type : SET_USER_FORM,
    payload : user
})