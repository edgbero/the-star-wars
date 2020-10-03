import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import styled from "styled-components";
import Pagination from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("<Pagination />", () => {
    it("render LoadingComponent ", () => {
        const props = {
            data: {
                characterPerPage: 1,
                totalCharacter: 18,
            }
        }
        const wrapper = shallow(<Pagination data={props}/> )
    });
});
