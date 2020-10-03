import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./index";

import {Container} from 'react-bootstrap';
import Navigation from "../component/Navigation"

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {

    it ('render App components', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Container));
        expect(wrapper.find(Navigation));
    })
})
