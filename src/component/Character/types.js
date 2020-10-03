export type CharacterType = {
    characterPerpage: any,
    currentCharacter: any,
    loading: boolean,
    error: null,
    totalCharacter: number,
    setPaginate: () => void,
};

export type CharacterDescType = {
    character: any,
    toggleActive: () => void,
}