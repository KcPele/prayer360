import { SUBSCRIBE_TO_GURUJI, GET_SUBSCRIBED_CONTENT, USER_ERROR, CLEAR_ERROR_RESPONSE_STATE } from "../types";

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case SUBSCRIBE_TO_GURUJI:
            return {
                ...state,
                requestResponse: action.payload,
            };
        case GET_SUBSCRIBED_CONTENT:
            return {
                ...state,
                contents: action.payload,
            };
        case USER_ERROR:
            return {
                ...state,
                userError: action.payload,
            }
        case CLEAR_ERROR_RESPONSE_STATE:
            return {
                ...state,
                requestResponse: null,
                userError: null,
            }
        default:
            return state;
    }
};