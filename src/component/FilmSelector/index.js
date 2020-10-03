import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../../redux/reducer/Film/actions";
import { fetchCharacters } from "../../redux/reducer/Character/actions";

const FilmSelector = () => {
    const dispatch = useDispatch();
    const films = useSelector(state => state.filmReducer.films);
    const loading = useSelector(state => state.filmReducer.loading);

    const setFilm = (e) => {
        let data = films[e.target.value];
        dispatch(fetchCharacters(data.characters));
    };

    useEffect(() => {
        dispatch(fetchFilms());
    }, [fetchFilms]);

    return (
        <Form>
            <Form.Group controlId="formGridState">
                <Form.Control as="select" onChange={setFilm} defaultValue={'default'}>
                    <option disabled value="default">Select the film series</option>
                    {!loading &&films.map((film, index) => {
                        return (
                            <option key={index} value={index}>
                                {film.title}
                            </option>
                        );
                    })}
                    {loading && (
                        <option>Loading...</option>
                    )}
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

export default FilmSelector;
