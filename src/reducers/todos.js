
const initialState = {
    isFetching : false,
    didInvalidate : false,
    items : [],
    total: 0,
    params :{}
}
const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'INVALIDATE_TODOS':
            return Object.assign({}, state, {
                didInvalidate : true
            });
        case 'REQUEST_TODOS':
            return Object.assign({},state, {
                isFetching : true,
                didInvalidate : false
            })
        case 'RECEIVE_TODOS':
            return Object.assign({}, state,{
                isFetching: false,
                didInvalidate : false,
                items : action.todos,
                total : action.total ,
                lastUpdated : action.receiveAt,
                params : action.params
            })
        case 'ADD_TODO':
            return Object.assign({}, state,{
                isFetching : false,
                didInvalidate: false,
                items : [
                    ...state.items,
                    action.todo
                ]
            })
            
        case 'TOGGLE_TODO':
            return Object.assign({}, state, {
                didInvalidate : false,
                items : state.items.map( todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo  ),
                params : action.params
            })
        case 'DELETE_TODO':
            return Object.assign({}, state, {
                    didInvalidate : false,
                    items : state.items.filter(
                        (todo) => 
                            todo.id !== action.id
                    )
                }
            )
        case 'UPDATE_TODO':
             return Object.assign({}, state, {
                didInvalidate : false,
                items : state.items.map(
                (todo) => 
                     (todo.id == action.todo.id) ? {...todo, title: action.todo.title} : todo
                
            )
        }) 
       

        default:
            return state
    }

}

export default todos;