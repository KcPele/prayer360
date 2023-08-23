import React, { useReducer } from 'react';

import axios from 'axios';
import SharedContext from "./sharedContext";
import sharedReducer from './sharedReducer';

import { GET_SUBSCRIBERS, GET_SUBSCRIBER, SHARED_ERROR, GET_GURUJIS, GET_GURUJI_DETAILS, UPDATE_PASSWORD, UPDATE_PROFILE, GET_NOTIFICATIONS, CLEAR_ERROR_RESPONSE_STATE, GET_PLATFORM_STORE_LINK } from "../types";

const SharedState = (props) => {
    const initialState = {
        subscribers: null,
        subscriber: null,
        gurujis: null,
        guruji: null,
        notifications: null,
        store_link: "",
        requestResponse: null,
        sharedError: null,
    }

    const [state, dispatch] = useReducer(sharedReducer, initialState);

    const URL = "https://api.360prayertemple.com/api";
    // const URL = "http://localhost:8000/api";

    const getSubscribers = async () => {
        try {
            
            const res = await axios.get(`${URL}/shared/get-users`);

            dispatch({
                type: GET_SUBSCRIBERS,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: SHARED_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const getSubscriber = async (reference) => {
        try {
            
            const res = await axios.get(`${URL}/shared/get-user-details/${reference}`);

            dispatch({
                type: GET_SUBSCRIBER,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: SHARED_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const getGurujis = async () => {
        try {
            const res = await axios.get(`${URL}/shared/get-gurujis`);

            dispatch({
                type: GET_GURUJIS,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: SHARED_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const getGurujiDetails = async (reference) => {
        try {
            const res = await axios.get(`${URL}/shared/get-guruji-details/${reference}`);

            dispatch({
                type: GET_GURUJI_DETAILS,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: SHARED_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const updatePassword = async (userId, formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }

        try {
            const res = await axios.post(`${URL}/shared/password-update/${userId}`, formData, config);

            dispatch({
                type: UPDATE_PASSWORD,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: SHARED_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const updateProfileData = async (userId, formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }


        try {
            const res = await axios.post(`${URL}/shared/update-profile/${userId}`, formData, config);

            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: SHARED_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const getNotifications = async () => {
        try {
            const res = await axios.get(`${URL}/shared/get-notifications`);

            dispatch({
                type: GET_NOTIFICATIONS,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: SHARED_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const getStorelink = async () => {
        try {
            const res = await axios.get(`${URL}/shared/get-platform-store-link`);

            dispatch({
                type: GET_PLATFORM_STORE_LINK,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: SHARED_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const clearErrorResponsState = () => dispatch({type: CLEAR_ERROR_RESPONSE_STATE});

    return (
        <SharedContext.Provider
          value={{
            subscribers: state.subscribers,
            subscriber: state.subscriber,
            gurujis: state.gurujis,
            guruji: state.guruji,
            notifications: state.notifications,
            store_link: state.store_link,
            requestResponse: state.requestResponse,
            sharedError: state.sharedError,
            getSubscribers,
            getSubscriber,
            getGurujis,
            getGurujiDetails,
            updatePassword,
            updateProfileData,
            getNotifications,
            getStorelink,
            clearErrorResponsState,
          }}
        >
          {props.children}
        </SharedContext.Provider>
    );
}

export default SharedState;