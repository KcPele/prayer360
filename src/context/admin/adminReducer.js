import { CREATE_USER, GET_AGENTS, ADMIN_ERROR, GET_AGENT_DETAILS, SET_STORE_LINK } from '../types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                userCreated: action.payload,            }
        case SET_STORE_LINK:
            return {
                ...state,
                updatedStoreLink: action.payload,            }
        case GET_AGENTS:
            return {
                ...state,
                agents: action.payload,
            }
        case GET_AGENT_DETAILS:
            return {
                ...state,
                agent: action.payload,
            }
        case ADMIN_ERROR:
            return {
                ...state,
                adminError: action.payload,
            }
        default:
            return state;
    }
}