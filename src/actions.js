import constants from "./constants";

export function addDay(resort, date, powder=false, backcountry=false) {
    return {
        type: constants.ADD_DAY,
        payload: {resort,date, powder, backcountry}
    }
}

export function removeDay(date) {
    return {
        type: constants.REMOVE_DAY,
        payload: date
    }
}

export function setGoal(goal) {
    return {
        type: constants.SET_GOAL,
        payload: goal
    }
}