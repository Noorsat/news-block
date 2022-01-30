import { SEARCH_INPUT } from "./types";

const initialState = {
    inputText:''
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_INPUT:
            return {...state, inputText: action.data}
            break;
        default:
            return state;
            break;
    }
}