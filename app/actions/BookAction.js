export const fetchChuckNorrisMessage = () => {
    console.log("fetch")
    return dispatch => {
        return fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: 'ADD_DATE',
                        date: json.value
                    }
                )
            })
            .catch((error) => {
                console.log(error)
            });
    }
}
 