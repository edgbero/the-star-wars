import React, { Fragment } from "react";
import JumbotronTitle from "../../../component/JumbotronTitle";
import FilmSelector from "../../../component/FilmSelector";
import Character from "../../../component/Character";

const Main = () => {
    return (
        <Fragment>
            <JumbotronTitle />
            <FilmSelector />
            <Character />
        </Fragment>
    );
};

export default Main;
