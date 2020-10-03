import React from 'react'
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../redux/reducer/root-reducer';
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import Character from "./index"

Enzyme.configure({ adapter: new Adapter() });

describe ('<Character />', () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )

    it ('render the component ', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Character />
            </Provider>
        )
    })
})
