import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    padding: 15px 30px;

    &:hover {
        color: #fff;
        text-decoration: none;
    }

    @media only screen and (max-width: 768px) {
        padding: 0px;
        margin: 0px;
    }
`;

const StyledTitle = styled.p`
    height: 0px;
    font-family: "Oswald", Helvetica, sans-serif;
    font-size: ${(props) => props.font};
    margin-right: ${(props) => props.right || 0};
    letter-spacing: 4px;
    display: inline-block;
    text-shadow: -1px -1px 0 #999, -2px -2px 0 #999, -3px -3px 0 #999,
        -4px -4px 0 #999;
`;

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <StyledLink to="/">
                    <StyledTitle className="part" font="50px" right="5px">
                        THE
                    </StyledTitle>
                    <StyledTitle className="part" font="17.5px">
                        STAR
                        <br />
                        WARS
                    </StyledTitle>
                </StyledLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    );
};

export default Navigation;
