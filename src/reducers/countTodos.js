const countTodos = (state = 0, action) => {
    switch (action.type) {
        case 'COUNT_TOTAL_TODOS':
            return action.count;
        default:
            return state;
    }
}

export default countTodos;