import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import styled from "styled-components";
import Loading from "./index";

Enzyme.configure({ adapter: new Adapter() });

const LoadingComponent = styled.div`
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

describe("<Loading />", () => {
    it("render LoadingComponent ", () => {
        const wrapper = shallow(<Loading> 
            <LoadingComponent />
        </Loading>);
    });
});
