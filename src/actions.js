import constants from "./constants";
import fetch from "isomorphic-fetch";
import {suggestions} from "./store/reducers/reducers";



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

export function addError(error) {
    return {
        type: constants.ADD_ERROR,
        payload: error
    }
}

export function clearError(index) {
    return {
        type: constants.CLEAR_ERROR,
        payload: index
    }
}

export function changeSuggestions(suggestions) {
    return {
        type: constants.CHANGE_SUGGESTIONS,
        payload: suggestions
    }
}

export function clearSuggestions() {
    return {
        type: constants.CHANGE_SUGGESTIONS
    }
}

export function randomGoals() {
    return (dispatch, getState) => {
        if (!getState().resortNames.fetching) {
            dispatch({
                type: constants.FETCH_RESORT_NAMES
            });
        }

        setTimeout(() => {
            dispatch({
                type: constants.CANCEL_FETCHING
            });
        }, 1500);
    }
}

export function suggestResortNames(value) {
    return (dispatch) => {
        dispatch({
            type: constants.FETCH_RESORT_NAMES
        });

        fetch('http://localhost:3333/resorts/' + value)
            .then(response => response.json())
            .then(suggestions => {
                dispatch(changeSuggestions(suggestions))
            })
            .catch(error => {
                dispatch(addError(error));
                dispatch({type: constants.CANCEL_FETCHING});
            });
    }
}