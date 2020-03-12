import constants from "./constants";
import storeFactory from './store';

const initialState = (localStorage['redux-store'])
    ? JSON.parse(localStorage['redux-store'])
    : {};

const saveState = () => {
    const state = JSON.stringify(store.getState());
    localStorage['redux-store'] = state;
};

const store = storeFactory(initialState);

store.subscribe(saveState);

store.dispatch({
    type: constants.ADD_DAY,
    payload: {
        "resort": "Mt Hella",
        "date": "2016-12-29",
        "powder": true,
        "backcountry": false
    }
});

store.dispatch({
    type: constants.ADD_DAY,
    payload: {
        "resort": "Mt Blah",
        "date": "2016-12-27",
        "powder": true,
        "backcountry": false
    }
});

store.dispatch({
    type: constants.ADD_DAY,
    payload: {
        "resort": "Mt buda",
        "date": "2016-12-28",
        "powder": true,
        "backcountry": false
    }
});

