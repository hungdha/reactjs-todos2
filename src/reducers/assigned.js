const assigned = (state = [], action) => {
    switch (action.type) {
        case 'ASSIGN':

            let filterState = state.filter( (item) => ( item.todoid != action.todoid )); 
            return [
                ...filterState,
                ...action.users.map( (userid) => (
                {
                    userid : userid ,
                    todoid : action.todoid 
                }
                ))
            ]
        default:
            return state; 
    }
}
export default assigned
