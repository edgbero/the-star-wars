import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { searchCharacter } from "../../redux/reducer/Character/actions";

const CharacterSearch = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const characters = useSelector(state => state.characterReducer.characters)

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const search = () => {
        dispatch(searchCharacter(name, characters))
    }

    return (
        <Form className="mb-5">
            <Row>
                <Col lg={6}>
                    <Form.Control
                        placeholder="Search Character"
                        type="text"
                        name="university_name"
                        onChange={handleChangeName}
                    />
                </Col>
                <Col lg={2}>
                    <Button variant="dark" onClick={search} block>Search</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default CharacterSearch;
