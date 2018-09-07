const assigned = (state = [], action) => {
    switch (action.type) {
        case 'ASSIGN':

            let filterState = state.filter( (item) => ( item.todoId != action.todoId )); 
            return [
                ...filterState,
                ...action.users.map( (userId) => (
                {
                    userId : userId ,
                    todoId : action.todoId 
                }
                ))
            ]
        default:
            return state; 
    }
}
export default assigned
