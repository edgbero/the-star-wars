import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchFilms } from "../../redux/reducer/Film/actions";
import { fetchCharacters, setPaginate, searchCharacter } from "../../redux/reducer/Character/actions";
import FilmType from "./types";

const FilmSelector = (props: FilmType) => {
    const setFilm = (e) => {
        let data = props.film[e.target.value];
        props.fetchCharacters(data.characters);
    };

    useEffect(() => {
        props.fetchFilms();
    }, [props.fetchFilms]);

    return (
        <Form>
            <Form.Group controlId="formGridState">
                <Form.Control as="select" onChange={setFilm} defaultValue={'default'}>
                    <option disabled value="default">Select the film series</option>
                    {props.film.map((film, index) => {
                        return (
                            <option key={index} value={index}>
                                {film.title}
                            </option>
                        );
                    })}
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

const mapDispatch = {
    fetchFilms,
    fetchCharacters,
    setPaginate,
    searchCharacter,
};

const mapStateToProps = (state) => {
    return {
        film: state.filmReducer.films,
        loading: state.filmReducer.loading,
        error: state.filmReducer.error,
    };
};

export default connect(mapStateToProps, mapDispatch)(FilmSelector);
