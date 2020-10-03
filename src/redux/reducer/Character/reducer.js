import { CharacterType } from "./types";

import {
    FETCH_CHARACTERS_BEGIN,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE,
} from "../Character/actions";

import {
    SET_CURRENT_PAGE,
    SET_INDEX_OF_LAST_CHARACTER,
    SET_INDEX_OF_FIRST_CHARACTER,
    SET_CURRENT_CHARACTER,
} from "../Character/pagination";

const initialState = {
    loading: false,
    error: null,
    characters: [],
    currentCharacter: [],
    currentPage: 1,
    indexOfLastCharacter: 1,
    indexOfFirstCharacter: 0,
    characterPerPage: 1,
};

// Reducer
const characterReducer = (state = initialState, action : CharacterType) => {
    switch (action.type) {
        case FETCH_CHARACTERS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                characters: action.payload.data,
            };
        case FETCH_CHARACTERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                characters: [],
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload.index,
            };
        case SET_INDEX_OF_LAST_CHARACTER:
            return {
                ...state,
                indexOfLastCharacter:
                    state.currentPage * state.characterPerPage,
            };
        case SET_INDEX_OF_FIRST_CHARACTER:
            return {
                ...state,
                indexOfFirstCharacter:
                    state.indexOfLastCharacter - state.characterPerPage,
            };
        case SET_CURRENT_CHARACTER:
            return {
                ...state,
                currentCharacter: state.characters.slice(
                    state.indexOfFirstCharacter,
                    state.indexOfLastCharacter
                ),
            };
        default:
            return state;
    }
};

export default characterReducer;
