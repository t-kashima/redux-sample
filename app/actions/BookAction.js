export const fetchChuckNorrisMessage = () => {
    console.log("fetch")
    return dispatch => {
        return fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => response.json())
            .then((json) => {
                dispatch(
                    {
                        type: 'FETCH_SUCCESS',
                        id: json.id,
                        icon_url: json.icon_url,
                        message: json.value
                    }
                )
            })
            .catch((error) => {
                console.log(error)
            });
    }
}
