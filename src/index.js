import constants from "./constants";
import rootReducer from "../src/store/reducers/reducers"
import initialState from "../src/initialState";
import { createStore } from "redux";

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: constants.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-12-22",
        "powder": true,
        "backcountry": false
    }
});

