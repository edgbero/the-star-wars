import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Table, Row } from "react-bootstrap";
import styled from "styled-components";
import PopupStarship from "../PopupStarship";
import LabelNotFound from "../LabelNotFound";
import { CharacterType, CharacterDescType } from "./types";

const StyledCard = styled(Card)`
    width: 100%;
    margin-bottom: 20px;

    .card-body {
        padding: 20px 50px;
    }

    .card-title {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 32px;
        margin: 0 0 30px 50px;
        font-family: monospace;
    }

    @media only screen and (max-width: 768px) {
        .card-body {
            padding: 1.25rem;
        }
    }
`;

const StyledTable = styled(Table)`
    tr td:first-child {
        font-weight: bold;
        width: 200px;
    }
`;

const StyledStarship = styled.label`
    padding: 5px 10px;
    background: #2f4f4f;
    color: #ffffff;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 0px;

    &:hover,
    &:active {
        background: #406b6b;
        cursor: pointer;
    }
`;

const ScrollingWrapper = styled(Row)`
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;

        .col {
            flex: 0 0 auto;
        }
    }
`;

const CharacterDesc = ({ character, toggleActive }: CharacterDescType) => {
    return (
        <StyledCard>
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <StyledTable>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{character.name}</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>{character.height}</td>
                        </tr>
                        <tr>
                            <td>Mass</td>
                            <td>{character.mass}</td>
                        </tr>
                        <tr>
                            <td>Hair Color</td>
                            <td>{character.hair_color}</td>
                        </tr>
                        <tr>
                            <td>Eye Color</td>
                            <td>{character.eye_color}</td>
                        </tr>
                        <tr>
                            <td>Birth Year</td>
                            <td>{character.birth_year}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{character.gender}</td>
                        </tr>
                        <tr>
                            <td>Homeworld</td>
                            <td>{character.homeworld}</td>
                        </tr>
                    </tbody>
                </StyledTable>

                <Card.Title className="mt-5">Starships</Card.Title>
                {character.starships.length !== 0 && (
                    <ScrollingWrapper>
                        {character.starships.map((starship, index) => {
                            return (
                                <StyledStarship 
                                    key={index}
                                    onClick={() => toggleActive(starship)}
                                >
                                    {starship.name}
                                </StyledStarship>
                            );
                        })}
                    </ScrollingWrapper>
                )}
                {character.starships.length === 0 && (
                    <LabelNotFound text="No Starship" />
                )}
            </Card.Body>
        </StyledCard>
    );
};

const Character = () => {
    const [isActive, setActive] = useState(false);
    const [starship, setStarship] = useState([]);
    const currentCharacter = useSelector((state) => state.characterReducer.currentCharacter);

    const toggleActive = (starship) => {
        setActive(!isActive);
        setStarship(starship);
    };

    return (
        <Fragment>
            <CharacterDesc
                character={currentCharacter[0]}
                toggleActive={toggleActive}
            />
            <PopupStarship
                starship={starship}
                isActive={isActive}
                setActive={setActive}
            ></PopupStarship>
        </Fragment>
    );
};

export default Character;
