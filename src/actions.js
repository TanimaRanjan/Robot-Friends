import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_PENDING,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAILED
} from "./constants";

export const setSearchField = (text) => ({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})

export const requestRobots = () => async (dispatch) => {
    dispatch({type:REQUEST_ROBOT_PENDING})

    try {
        let userResp = await fetch(`https://jsonplaceholder.typicode.com/users`)
        let users = await userResp.json();
        dispatch({type:REQUEST_ROBOT_SUCCESS, payload: users})
    } catch (error) {
        dispatch({type:REQUEST_ROBOT_FAILED, payload: error})
    }



}

