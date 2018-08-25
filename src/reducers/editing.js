const editing = (state = 0, action ) => {
     switch (action.type) {
        case 'EDIT_TODO':
            return action.id;
        default:
            return state;
    } 
}

export default editing;