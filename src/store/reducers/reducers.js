import constants from "../../constants";

export const goal = (state = 10, action) =>
    (action.type === constants.SET_GOAL) ? parseInt(action.payload) : state;

// {
//     if (action.type === constants.SET_GOAL) {
//         return parseInt(action.payload);
//     } else {
//         return state;
//     }
// };

export const skiDay = (state = null, action) =>
    (action.type === constants.ADD_DAY) ? action.payload : state;

// {
//     if (action.type === constants.ADD_DAY) {
//         return action.payload;
//     } else {
//         return state;
//     }
// };

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
