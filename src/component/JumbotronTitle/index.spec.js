import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import JumbotronTitle from "./index";
import {Container} from 'react-bootstrap';

Enzyme.configure({ adapter: new Adapter() });

describe("<JumbotronTitle />", () => {

    it ('render the components', () => {
        const wrapper = shallow(<JumbotronTitle />);
        expect(wrapper.find(Container));
    })
})
