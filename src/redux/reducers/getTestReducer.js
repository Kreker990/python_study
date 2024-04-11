import { GET_TEST } from "./type"

const initialState = {
    value: false
}

const getTest = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_TEST:
            return payload
        default:
            return state
    }
}
export default getTest;