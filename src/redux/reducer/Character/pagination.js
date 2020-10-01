export const setCurrentPage = (index) => ({
    type: SET_CURRENT_PAGE,
    payload: { index },
});

export const setIndexOfLastCharacter = () => ({
    type: SET_INDEX_OF_LAST_CHARACTER,
})

export const setIndexOfFirstCharacter = () => ({
    type: SET_INDEX_OF_FIRST_CHARACTER,
})

export const setCurrentCharacter = () => ({
    type: SET_CURRENT_CHARACTER,
})

export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_INDEX_OF_LAST_CHARACTER = "SET_INDEX_OF_LAST_CHARACTER";
export const SET_INDEX_OF_FIRST_CHARACTER = "SET_INDEX_OF_FIRST_CHARACTER";
export const SET_CURRENT_CHARACTER = "SET_CURRENT_CHARACTER";
