export const searchReducer = (state = {result: [], total: 0}, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {...state, result: action.result, total: action.total}
        default:
            return state;
    }
}
