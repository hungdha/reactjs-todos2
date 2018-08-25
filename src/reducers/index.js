import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import editing from './editing';
import users from './users';
import assigned from './assigned';


export default combineReducers(
    {
        todos,
        users,
        editing,
        visibilityFilter,
        assigned
    }
)
