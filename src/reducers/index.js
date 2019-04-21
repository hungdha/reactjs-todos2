import {combineReducers} from 'redux'
import todos from './todos'
// import visibilityFilter from './visibilityFilter'
import users from './users';
import comments from './comments';
// import assigned from './assigned';


const rootReducer = combineReducers({
    todos : todos,
    users : users,
    comments
    // visibilityFilter : visibilityFilter,
    // assigned : assigned 
});

export default rootReducer;

