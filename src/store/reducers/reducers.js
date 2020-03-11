import constants from "../../constants";

export const goal = (state = 10, action) =>
    (action.type === constants.SET_GOAL) ? parseInt(action.payload) : state;


export const skiDay = (state = null, action) =>
    (action.type === constants.ADD_DAY) ? action.payload : state;

export const allSkiDays = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_DAY:
            const hasDay = state.some(skiDay => skiDay.date === action.payload.date);
            return (hasDay)
                ? state
                : [...state, skiDay(null, action)]
                    .sort((a, b) => new Date(b.date) - new Date(a.date));
        case constants.REMOVE_DAY:
            return state.filter((skiDay) => skiDay.date !== action.payload);
        default:
            return state
    }
};

export const errors = (state = [], action) => {
    switch (action.type) {
        case constants.ADD_ERROR:
            return [...state, action.payload];
        case constants.CLEAR_ERROR:
            return state.filter((element, i) => i !== action.payload);
        default:
            return state;
    }
};

export const fetching = (state = false, action) => {
    switch (action.type) {
        case constants.FETCH_RESORT_NAMES:
            return true;
        case constants.CANCEL_FETCHING:
            return false;
        case constants.CHANGE_SUGGESTIONS:
            return false;
        default:
            return state
    }
};

export const suggestions = (state = [], action) => {
    switch (action.type) {
        case constants.CHANGE_SUGGESTIONS:
            return action.payload;
        case constants.CLEAR_SUGGESTIONS:
            return [];
        default:
            return state
    }
};