import {
    FETCH_CHARACTERS_BEGIN,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE,
} from "../Character/actions";

const initialState = {
    loading: false,
    error: null,
    characters: [],
};

// Reducer
const CharactersReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};

export default CharactersReducer;
