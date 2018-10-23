import {combineReducers} from 'redux'
import todos from './todos'
// import visibilityFilter from './visibilityFilter'
import users from './users';
// import assigned from './assigned';


const rootReducer = combineReducers({
    todos : todos,
    users : users,
    // visibilityFilter : visibilityFilter,
    // assigned : assigned 
});

export default rootReducer;

