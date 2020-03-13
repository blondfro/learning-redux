import constants from "../constants";
import rootReducer from "./reducers/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const consoleMsgs = store => {
    return next => {
        return action => {
            let result = next(action);
            console.groupCollapsed(`dispatching action => ${action.type}`);
            console.log(`ski days: ${store.getState().allSkiDays.length}`);

            let { allSkiDays, goal, errors, resortNames } = store.getState();

            console.log(`
                    Ski Days: ${allSkiDays.length}
                    Goal: ${goal}
                    Fetching: ${resortNames.fetching}
                    Suggestions: ${resortNames.suggestions}
                    Errors:  ${errors.length}
            `);

            console.groupEnd();

            return result
        }
    }
};


export default (initialState = {}) => {
    return applyMiddleware(thunk, consoleMsgs)(createStore)(rootReducer, initialState)
}
