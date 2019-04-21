import { FETCH_COMMENTS_OF_TODO_REQUEST,
    FETCH_COMMENTS_OF_TODO_FAILURE ,
    FETCH_COMMENTS_OF_TODO_SUCCESS 
} from '../actions/comments';

const initialState = {
    commentsList : { comments : [], error: null, loading : false, count: 0, todo : {} },
}

const comments = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_OF_TODO_REQUEST:{
            return Object.assign({}, state,
                {
                    commentsList : Object.assign({}, state.comments, {
                        loading : true,
                        todo : action.payload
                    })
                });
        }
        case FETCH_COMMENTS_OF_TODO_FAILURE:{
            return Object.assign({}, state,
                {
                    commentsList : Object.assign({}, state.comments, {
                        loading : false,
                        error : action.payload
                    })
                });
        }
        case FETCH_COMMENTS_OF_TODO_SUCCESS:{
            return Object.assign({}, state, {
                commentsList: Object.assign({}, state.comments, {
                    loading : false,
                    comments : action.payload,
                    count : action.payload.length,
                    todo : { ...state.commentsList.todo }
                })
            });
        }
        default:
            return state;
    }
}

export default comments;