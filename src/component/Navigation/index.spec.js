import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import styled from "styled-components";
import Navigation from "./index";
import {Navbar} from 'react-bootstrap';

Enzyme.configure({ adapter: new Adapter() });

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

describe("<Navigation />", () => {
    const props = {
        font: '12px',
        right: '20px;'
    }

    it("render Navigation Component", () => {
        const wrapper = shallow(
            <Navigation>
                <StyledTitle className="part" font="50px" right="5px">
                        THE
                </StyledTitle>
                <StyledTitle className="part" font="17.5px">
                    STAR
                    <br />
                    WARS
                </StyledTitle>
            </Navigation>
        );
    });
});
