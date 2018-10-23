import {
    FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
    CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, 
    DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, SET_USER_FORM} from '../actions/users';
const initialState = {
    usersList: { users: [], error:null, loading: false},
    newUser: {  
        user: {
            id : '',
            fullname: 'Jan Doe',
            username : '',
            email : '',
            phone : '',
            birthday : ''
        }, error: null, loading: false},
    deleteUser: { user: null, error: null, loading : false }
}
const users = (state = initialState, action )=>{
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                usersList:{
                    ...state.usersList,
                    loading : true
                }
            } 
        case FETCH_USERS_SUCCESS:
            return Object.assign({}, state, {
                usersList: Object.assign({}, state.usersList, {
                    users : action.payload,
                    loading : false
                })
            });

        case FETCH_USERS_FAILURE:
        // console.log('action.payload');
        // console.log(action.payload)
            let error = action.payload || {message: action.payload.message};
            return Object.assign({}, state, {
                usersList: Object.assign({}, state.usersList, {
                    error: error,
                    loading : false
                })
            })
        case CREATE_USER_REQUEST:
            return {
                ...state,
                newUser: {
                    ...state.newUser,
                    loading : true
                }
            }
        case CREATE_USER_SUCCESS:
            return {
                ...state, 
                newUser:{ 
                    user: action.payload,  
                    error : null, 
                    loading : false
                }
            }
        case CREATE_USER_FAILURE:
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return {
                ...state,
                newUser:{
                    user: null,  
                    error : error, 
                    loading : false
                }
            }
        case DELETE_USER_REQUEST:
            return  Object.assign({}, state, {
                    deleteUser : Object.assign({}, state.deleteUser, {
                        loading : true
                    })
                });
        case DELETE_USER_FAILURE:
            return Object.assign({}, state, {
                deleteUser : Object.assign({}, state, {
                    error : action.payload,
                    loading: false
                })
            })
        case DELETE_USER_SUCCESS:
            return Object.assign({}, state, {
                deleteUser : Object.assign({}, state, {
                    user : action.payload,
                    loading: false
                })
            })
        case SET_USER_FORM:
            console.log('action.payload ');
            console.log(action.payload )
            return Object.assign({}, state, {
                newUser : Object.assign({}, state.newUser, {
                    ...action.payload
                } )
            })
        default:
            return state;
    }
}

export default users;