import constants from "./constants";
import rootReducer from "../src/store/reducers/reducers"
import initialState from "../src/initialState";
import { createStore } from "redux";

const store = createStore(rootReducer, initialState);

const unsubGoalLogger = store.subscribe(() => {
    console.log("goal: ", store.getState().goal);
});

setInterval(() => {
    store.dispatch({
        type: constants.SET_GOAL,
        payload: Math.floor(Math.random() * 100)
    })
}, 250);

setTimeout(() => {
    unsubGoalLogger();
}, 3000);



