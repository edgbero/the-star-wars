import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import styled from "styled-components";
import PopupStarship from "./index";

Enzyme.configure({ adapter: new Adapter() });

describe("<PopupStarship />", () => {
    it("render PopupStarship ", () => {
        const wrapper = shallow(<PopupStarship /> )
    });
});
