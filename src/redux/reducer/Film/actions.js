import axios from 'axios'

export function fetchFilms(a) {
    return dispatch => {
        dispatch(fetchFilmsBegin());
        return axios.get('https://swapi.dev/api/films/')
            .then((res) => {
                dispatch(fetchFilmsSuccess(res.data.results))
                return res.data.results
            })
            .catch(e => dispatch(fetchFilmsFailure(e)))
    }
}

export const fetchFilmsBegin = () => ({
    type: FETCH_FILMS_BEGIN
});
  
export const fetchFilmsSuccess = data => ({
    type: FETCH_FILMS_SUCCESS,
    payload: { data }
});
  
export const fetchFilmsFailure = error => ({
    type: FETCH_FILMS_FAILURE,
    payload: { error }
});


export const FETCH_FILMS_BEGIN = "FETCH_FILMS_BEGIN";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_FILMS_FAILURE = "FETCH_FILMS_FAILURE";

