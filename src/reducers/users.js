const users = (state = [], action )=>{
    switch (action.type) {
        case 'RECEIVE_USERS':
            return action.users;
        case 'ADD_USER':
            return [...state,{
                id: state.length + 1,
                name : action.name
            }]

        default:
            return state;
    }
}

export default users;