import React, { Fragment } from "react";
import JumbotronTitle from "../../../component/JumbotronTitle";
import FilmSelector from "../../../component/FilmSelector";
import Character from "../../../component/Character";
import CharacterSearch from "../../../component/CharacterSearch";

const Main = () => {
    return (
        <Fragment>
            <JumbotronTitle />
            <FilmSelector />
            <CharacterSearch />
            <Character />
        </Fragment>
    );
};

export default Main;
