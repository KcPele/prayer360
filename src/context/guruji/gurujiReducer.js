import { UPLOAD_CONTENT, GURUJI_ERROR, CLEAR_ERROR_RESPONSE_STATE, UPDATE_PERSONAL_STORE } from "../types";

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case UPLOAD_CONTENT:
            return {
                ...state,
                requestResponse: action.payload,
            };
        case UPDATE_PERSONAL_STORE:
            return {
                ...state,
                requestResponse: action.payload,
            };
        case GURUJI_ERROR:
            return {
                ...state,
                gurujiError: action.payload,
            }
        case CLEAR_ERROR_RESPONSE_STATE:
            return {
                ...state,
                requestResponse: null,
                gurujiError: null,
            }
        default:
            return state;
    }
};