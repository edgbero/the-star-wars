import axios from "axios";
import {
    setCurrentPage,
    setIndexOfFirstCharacter,
    setIndexOfLastCharacter,
    setCurrentCharacter,
} from "./pagination";

export function fetchCharacters(data) {
    return (dispatch) => {
        dispatch(fetchCharactersBegin());
        const characters = [];
        const request = data.map((character) => {
            return axios
                .get(character)
                .then((res) => {
                    let tempCharacter = {
                        ...res.data,
                        starships: [],
                    };
                    const homeworldAPI = res.data.homeworld;
                    const starshipsAPI = res.data.starships;

                    // fetch homeworld
                    axios
                        .get(homeworldAPI)
                        .then((response) => {
                            tempCharacter.homeworld = response.data.name;
                        })
                        .catch((e) => dispatch(fetchCharactersFailure(e)));

                    // fetch starship
                    if (starshipsAPI.length) {
                        starshipsAPI.map((starshipAPI) => {
                            return axios
                                .get(starshipAPI)
                                .then((res) => {
                                    tempCharacter.starships.push(res.data);
                                })
                                .catch((e) =>
                                    dispatch(fetchCharactersFailure(e))
                                );
                        });
                    }
                    characters.push(tempCharacter);
                })
                .catch((e) => dispatch(fetchCharactersFailure(e)));
        });

        Promise.all(request).then(() => {
            dispatch(fetchCharactersSuccess(characters));
            dispatch(fetchDisplayedCharacters(characters))
            dispatch(setPaginate(1));
        });
    };
}

export function setPaginate(number) {
    return (dispatch) => {
        dispatch(setCurrentPage(number));
        dispatch(setIndexOfLastCharacter());
        dispatch(setIndexOfFirstCharacter());
        dispatch(setCurrentCharacter());
    };
}

export function searchCharacter(name, characters) {
    return (dispatch) => {
        const filteredCharacter = characters.filter((character) => {
            return (
                character.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
            );
        });
        dispatch(fetchDisplayedCharacters(filteredCharacter));
        dispatch(setPaginate(1));
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

export const fetchDisplayedCharacters = (data) => ({
    type: FETCH_DISPLAYED_CHARACTERS,
    payload: { data },
})

export const FETCH_CHARACTERS_BEGIN = "FETCH_CHARACTERS_BEGIN";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";
export const FETCH_DISPLAYED_CHARACTERS = "FETCH_DISPLAYED_CHARACTERS";
