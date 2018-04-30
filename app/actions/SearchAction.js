export const searchItem = (query) => {
    console.log('https://api.chucknorris.io/jokes/search?query=' + query)
    return dispatch => {
        return fetch('https://api.chucknorris.io/jokes/search?query=' + query)
            .then((response) => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: 'FETCH_SUCCESS',
                        total: json.total,
                        result: json.result,
                    }
                )
            })
            .catch((error) => {
                console.log(error)
            });
    }
}

