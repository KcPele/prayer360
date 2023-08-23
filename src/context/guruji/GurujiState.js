import React, { useReducer } from 'react';

import axios from 'axios';
import GurujiContext from "./gurujiContext";
import gurujiReducer from './gurujiReducer';

import { CLEAR_ERROR_RESPONSE_STATE, GURUJI_ERROR, UPLOAD_CONTENT, UPDATE_PERSONAL_STORE } from "../types";

const GurujiState = (props) => {
    const initialState = {
        requestResponse: null,
        gurujiError: null,
    }

    const [state, dispatch] = useReducer(gurujiReducer, initialState);

    const URL = "https://api.360prayertemple.com/api";
    // const URL = "http://localhost:8000/api";

    const uploadContent = async (formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }


        try {
            const res = await axios.post(`${URL}/guruji/upload-content`, formData, config);

            dispatch({
                type: UPLOAD_CONTENT,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: GURUJI_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const updatePersonalStore = async (formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }


        try {
            const res = await axios.post(`${URL}/guruji/update-personal_store`, formData, config);

            dispatch({
                type: UPDATE_PERSONAL_STORE,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: GURUJI_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const clearResponsState = () => dispatch({type: CLEAR_ERROR_RESPONSE_STATE});

    return (
        <GurujiContext.Provider
          value={{
            requestResponse: state.requestResponse,
            gurujiError: state.gurujiError,
            clearResponsState,
            uploadContent,
            updatePersonalStore,
          }}
        >
          {props.children}
        </GurujiContext.Provider>
    );
}

export default GurujiState;