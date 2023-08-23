import { GET_SUBSCRIBERS, GET_SUBSCRIBER, GET_GURUJIS, GET_GURUJI_DETAILS, UPDATE_PASSWORD, UPDATE_PROFILE, GET_NOTIFICATIONS, GET_PLATFORM_STORE_LINK, CLEAR_ERROR_RESPONSE_STATE, SHARED_ERROR } from "../types";

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case GET_SUBSCRIBERS:
            return {
                ...state,
                subscribers: action.payload,
            };
        case GET_SUBSCRIBER:
            return {
                ...state,
                subscriber: action.payload,
            };
        case GET_GURUJIS:
            return {
                ...state,
                gurujis: action.payload
            }
        case GET_GURUJI_DETAILS:
            return {
                ...state,
                guruji: action.payload,
            }
        case UPDATE_PASSWORD:
            return {
                ...state,
                requestResponse: action.payload,
            }
        case UPDATE_PROFILE:
            return {
                ...state,
                requestResponse: action.payload,
            }
        case GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload,
            }
        case GET_PLATFORM_STORE_LINK:
            return {
                ...state,
                store_link: action.payload,
            }
        case SHARED_ERROR:
            return {
                ...state,
                sharedError: action.payload,
            }
        case CLEAR_ERROR_RESPONSE_STATE:
            return {
                ...state,
                requestResponse: null,
                sharedError: null,
            }
        default:
            return state;
    }
};