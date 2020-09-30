import { combineReducers } from "redux";
import filmReducer from "./Film/reducer";
import characterReducer from "./Character/reducer";

export default combineReducers({
    filmReducer,
    characterReducer,
});
