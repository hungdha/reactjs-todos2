import services from '../api'
export const  FETCH_COMMENTS_OF_TODO_REQUEST = 'FETCH_COMMENTS_OF_TODO_REQUEST';
export const  FETCH_COMMENTS_OF_TODO_FAILURE = 'FETCH_COMMENTS_OF_TODO_FAILURE';
export const  FETCH_COMMENTS_OF_TODO_SUCCESS = 'FETCH_COMMENTS_OF_TODO_SUCCESS';
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';



// Fetching Comments Of Todo
const fetchCommentsOfTodoRequest = (request) =>  ({
    type : FETCH_COMMENTS_OF_TODO_REQUEST,
    payload : request
})
const fetchCommentsOfTodoFailure = (error) =>  ({
    type : FETCH_COMMENTS_OF_TODO_FAILURE,
    payload : error
})
const fetchCommentsOfTodoSuccess = (comments) =>  ({
    type : FETCH_COMMENTS_OF_TODO_SUCCESS,
    payload : comments
})

export function fetchCommentsOfTodo(todo){
    // return a function
    return (dispatch) => { 
        dispatch( fetchCommentsOfTodoRequest(todo));
        return services.comments.fetchCommentsOfTodo(todo).then(
            response => {
                console.log(response)
                if(response.error)
                    dispatch( fetchCommentsOfTodoFailure(response.error.data))
                else
                    dispatch( fetchCommentsOfTodoSuccess(response.data))
            }
        ).catch( 
            error => {
               dispatch( fetchCommentsOfTodoFailure(error.message))
            //    console.log('err');
            }
        )
    }
} 


// add comment
// Adding comment into todo
const addCommentRequest = (request) =>  ({
    type : ADD_COMMENT_REQUEST,
    payload : request
})
const addCommentFailure = (error) =>  ({
    type : ADD_COMMENT_FAILURE,
    payload : error
})
const addCommentSuccess = (response) =>  ({
    type : ADD_COMMENT_SUCCESS,
    payload : response
})

export function addComment(data){
    return (dispatch) =>{
        dispatch(addCommentRequest(data));
        return services.comments.create(data).then(
            (response) => {
                if(response.error)
                    dispatch( addCommentFailure(response.error.data));
                else
                    dispatch( addCommentSuccess(response.data));
            }
        ).catch((error) => {
            // console.log(error);
            dispatch(addCommentFailure(error.message));
        })
    }
}

