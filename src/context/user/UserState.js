import React, { useReducer } from 'react';

import axios from 'axios';
import UserContext from "./userContext";
import userReducer from './userReducer';

import { CLEAR_ERROR_RESPONSE_STATE, USER_ERROR, SUBSCRIBE_TO_GURUJI, GET_SUBSCRIBED_CONTENT } from "../types";

const UserState = (props) => {
    const initialState = {
        contents: null,
        requestResponse: null,
        userError: null,
    }

    const [state, dispatch] = useReducer(userReducer, initialState);

    const URL = "https://api.360prayertemple.com/api";
    // const URL = "http://localhost:8000/api";

    const subscribeToGuruji = async (guruji_reference) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }


        try {
            const res = await axios.post(`${URL}/user/subscribe-to-guruji/${guruji_reference}`, config);

            dispatch({
                type: SUBSCRIBE_TO_GURUJI,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: USER_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const getSubscribedContent = async (guruji_reference) => {
        try {
            const res = await axios.get(`${URL}/user/get-guruji-subscribed-contents/${guruji_reference}`);

            dispatch({
                type: GET_SUBSCRIBED_CONTENT,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: USER_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const clearResponsState = () => dispatch({type: CLEAR_ERROR_RESPONSE_STATE});

    return (
        <UserContext.Provider
          value={{
            contents: state.contents,
            requestResponse: state.requestResponse,
            userError: state.userError,
            clearResponsState,
            subscribeToGuruji,
            getSubscribedContent,
          }}
        >
          {props.children}
        </UserContext.Provider>
    );
}

export default UserState;