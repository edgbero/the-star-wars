import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import JumbotronTitle from "../../../component/JumbotronTitle";
import FilmSelector from "../../../component/FilmSelector";
import Character from "../../../component/Character";
import CharacterSearch from "../../../component/CharacterSearch";
import Pagination from "../../../component/Pagination";
import Loading from "../../../component/Loading";

import { setPaginate } from "../../../redux/reducer/Character/actions";

const Main = () => {
    const dispatch = useDispatch();
    const characterPerpage = useSelector((state) => state.characterReducer.characterPerPage);
    const totalCharacter = useSelector((state) => state.characterReducer.displayedCharacters.length);
    const currentCharacter = useSelector((state) => state.characterReducer.currentCharacter);
    const loading = useSelector((state) => state.characterReducer.loading);

    const paginate = (number) => {
        dispatch(setPaginate(number));
    };

    return (
        <Fragment>
            <JumbotronTitle />
            <FilmSelector />
            {loading && <Loading />}
            {!loading && currentCharacter && currentCharacter.length !== 0 && (
                <Fragment>
                    <CharacterSearch />
                    <Character />
                    <Pagination
                        totalCharacter={totalCharacter}
                        characterPerPage={characterPerpage}
                        paginate={paginate}
                    />
                </Fragment>
            )}
        </Fragment>
    );
};

export default Main;
