const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    title : action.title,
                    completed : false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(
                todo => 
                    (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
                
            )
        case 'DELETE_TODO':
            return state.filter(
                (todo) => 
                     todo.id !== action.id
                
            )
        case 'UPDATE_TODO':
             return state.map(
                (todo) => 
                     (todo.id == action.todo.id) ? {...todo, title: action.todo.title} : todo
                
            ) 
        case 'RECEIVE_TODOS':
            return action.todos
        default:
            return state
    }

}

export default todos;