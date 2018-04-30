export const date = (state = {item: {}}, action) => {
    console.log('reducer');
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {...state, item: {
                id: action.id,
                icon_url: action.icon_url, 
                message: action.message
            }};
        case 'CLEAR_DATE':
            return {...state, item: {}};
        default:
            return state;
    }
}
