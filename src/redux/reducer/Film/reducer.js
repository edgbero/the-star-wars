import { FilmType } from './types';

import {
    FETCH_FILMS_BEGIN,
    FETCH_FILMS_SUCCESS,
    FETCH_FILMS_FAILURE,
} from "../Film/actions";

const initialState = {
    films: [],
    loading: false,
    error: null,
};

// Reducer
const filmReducer = (state = initialState, action : FilmType) => {
    switch (action.type) {
        case FETCH_FILMS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_FILMS_SUCCESS:
            return {
                ...state,
                loading: false,
                films: action.payload.data,
            };
        case FETCH_FILMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                films: [],
            };
        
        default:
            return state;
    }
};

export default filmReducer;
