import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import styled from "styled-components";

import { setPaginate } from "../../redux/reducer/Character/actions";
import Pagination from "../Pagination";

const Loading = styled.div`
        color: red;
        width: 5rem;
        height: 5rem;
        margin: 20.4rem auto;
        border-radius: 50%;
        border: 0.3rem solid #d6d6d6;
        border-top-color: #333333;
        animation: 1.5s spin infinite linear;
    
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
`;

const CharacterDesc = ({character}) => {
    return (
        <Card style={{ width: "100%" }}>
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>Name: {character.name}</Card.Text>
                <Card.Text>Height: {character.height}</Card.Text>
                <Card.Text>Mass: {character.mass}</Card.Text>
                <Card.Text>
                    Hair Color: {character.hair_color}
                </Card.Text>
                <Card.Text>Eye Color: {character.eye_color}</Card.Text>
                <Card.Text>Birth Year: {character.name}</Card.Text>
                <Card.Text>Gender: {character.gender}</Card.Text>
                <Card.Text>
                    Homeworld: {character.homeworld}
                </Card.Text>

                <Card.Title>Starships</Card.Title>
                {character.starships.length !== 0 &&
                    character.starships.map((starship, index) => {
                        return (
                            <Card.Link key={index}>Starship {index}</Card.Link>
                        );
                    })}
                {character.starships.length === 0 && (
                    '-'
                )}
            </Card.Body>
        </Card>
    );
};

const Character = (props) => {

    const paginate = (number) => {
        console.log(number)
        props.setPaginate(number);
    };
    
    if (props.loading) return <Loading />;
    else if (props.currentCharacter && props.currentCharacter.length !== 0) {
        return (
            <Fragment>
                <CharacterDesc character={props.currentCharacter[0]}/>
                <Pagination totalCharacter={props.totalCharacter} characterPerPage={props.characterPerpage} paginate={paginate}/>
            </Fragment>
        );
    }
    return false;
};

const mapDispatch = {
    setPaginate
};


const mapStateToProps = (state) => {
    console.log(state)
    return {
        characterPerpage: state.characterReducer.characterPerPage,
        totalCharacter: state.characterReducer.characters.length,
        currentCharacter: state.characterReducer.currentCharacter,
        loading: state.characterReducer.loading,
        error: state.characterReducer.error,
    };
};

export default connect(mapStateToProps, mapDispatch)(Character);
