const users = (state = [], action )=>{
    switch (action.type) {
        case 'RECEIVE_USERS':
            return action.users;
        case 'ADD_USER':
        console.log('state length')
        console.log(state.length)
            return [...state,{
                id: state.length + 1,
                name : action.name
            }]

        default:
            return state;
    }
}

export default users;