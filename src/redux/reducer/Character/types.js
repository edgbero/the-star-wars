export type StateType = {
    loading: boolean,
    error: null,
    characters: any,
    currentCharacter: any,
    currentPage: number,
    indexOfLastCharacter: number,
    indexOfFirstCharacter: number,
    characterPerPage: number,
};

export type CharacterType = {
   state: StateType,
   action: any
};
