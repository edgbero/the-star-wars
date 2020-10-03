import React from "react";
import Modal from "react-modal";
import { Button, Table } from "react-bootstrap";
import styled from "styled-components";
import { PopupStarshipType } from "./types";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        padding: "30px",
    },
};

const StyledButton = styled(Button)`
    width: 100%;
    margin-top: 15px;
`;

const StyledTable = styled(Table)`
    tr td:first-child {
        max-width: 200px;
        min-width: 200px;
    }

    tr td:nth-child(2) {
        max-width: 300px;
        min-width: 300px;
    }
    

    .rating {
        background: #326ba8;
        color: #ffffff;
        margin: 0px;
        padding: 7px;
        border-radius: 5px;
    }

    @media only screen and (max-width: 768px) {
        tr td:first-child, tr td:nth-child(2) {
            max-width: auto;
            min-width: auto
        }
    }
`

const StyledTitle = styled.h1`
    margin-bottom: 25px;
    font-weight: bold;
`

const PopupStarship = ({ starship, isActive, setActive }: PopupStarshipType) => {
    return (
        <Modal style={customStyles} isOpen={isActive} ariaHideApp={false}>
            <StyledTitle>{starship.name}</StyledTitle>
            <StyledTable>
                <tbody>
                    <tr>
                        <td>Model</td>
                        <td>{starship.model}</td>
                    </tr>
                    <tr>
                        <td>Manufacturer</td>
                        <td>{starship.manufacturer}</td>
                    </tr>
                    <tr>
                        <td>Length</td>
                        <td>{starship.length}</td>
                    </tr>
                    <tr>
                        <td>Cargo Capacity</td>
                        <td>{starship.cargo_capacity}</td>
                    </tr>
                    <tr>
                        <td>Crew</td>
                        <td>{starship.crew}</td>
                    </tr>
                    <tr>
                        <td>Passengers</td>
                        <td>{starship.passengers}</td>
                    </tr>
                    <tr>
                        <td>Class</td>
                        <td>{starship.starship_class}</td>
                    </tr>
                    <tr>
                        <td>Hyperdrive Rating</td>
                        <td><label className="rating">{starship.hyperdrive_rating}</label></td>
                    </tr>
                    <tr>
                        <td>Atmosphering Speed</td>
                        <td>{starship.max_atmosphering_speed}</td>
                    </tr>
                </tbody>
            </StyledTable>
            <StyledButton variant="dark" onClick={() => setActive(false)}>Close</StyledButton>
        </Modal>
    );
};

export default PopupStarship;
