const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text : action.text,
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
                     (todo.id == action.todo.id) ? {...todo, text: action.todo.text} : todo
                
            ) 
        case 'RECEIVE_TODOS':
       
            return action.todos;
      /*   case 'ASSIGN_USER':
            return state.map(
                (todo) => (todo.id == action.obj.todoid) ? {...todo, assigns: [action.obj.uids]} : todo
            )
             */
        default:
            return state
    }

}

export default todos;