import { API_TEST } from "../config";
import { GET_TEST } from "../reducers/type";

export const getTest = () => {
    return async (dispatch) => {
        const response = await fetch(API_TEST, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });
        const resData = await response.json();
        dispatch({
            type: GET_TEST,
            payload: resData
        })
    }
}
