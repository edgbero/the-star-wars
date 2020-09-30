import axios from "axios";

export function fetchCharacters(data) {
    return (dispatch) => {
        dispatch(fetchCharactersBegin());
        const characters = [];
        const request = data.map((character) => {
            return axios
                .get(character)
                .then((res) => {
                    characters.push(res.data);
                })
                .catch((e) => dispatch.fetchCharactersFailure(e));
        });

        Promise.all(request).then(() => {
            dispatch(fetchCharactersSuccess(characters))    
        })

    };
}

export const fetchCharactersBegin = () => ({
    type: FETCH_CHARACTERS_BEGIN,
});

export const fetchCharactersSuccess = (data) => ({
    type: FETCH_CHARACTERS_SUCCESS,
    payload: { data },
});

export const fetchCharactersFailure = (error) => ({
    type: FETCH_CHARACTERS_FAILURE,
    payload: { error },
});

export const FETCH_CHARACTERS_BEGIN = "FETCH_CHARACTERS_BEGIN";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";