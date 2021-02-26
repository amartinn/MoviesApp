const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            console.log(action.payload)
            return {
                ...state,
                language: action.payload,
            }
        default:
            return state
    }
}

export default reducer