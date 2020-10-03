export type FilmType = {
    film: any,
    loading: boolean,
    error: null,
    fetchCharacters: () => void,
    fetchFilms: () => void,
    searchCharacter: () => void,
    setPaginate: () => void,
};
