import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import styled from "styled-components";

const StyledJumbotron = styled(Jumbotron)`
    margin: 50px 0px;
    color: #fff;
    background: linear-gradient(110deg, #343a40 60%, #2f4f4f 60%);
    background-size: cover;
`;

const JumbotronTitle = () => {
    return (
        <StyledJumbotron fluid>
            <Container>
                <h1>The Star Wars</h1>
                <p>
                    Discover the Star Wars film series. Explore the details of
                    the actor.
                </p>
            </Container>
        </StyledJumbotron>
    );
};

export default JumbotronTitle;
