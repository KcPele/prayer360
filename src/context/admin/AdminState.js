import React, { useReducer } from "react";
import axios from "axios";
import AdminContext from "./adminContext";
import adminReducer from "./adminReducer";
import { CREATE_USER, GET_AGENTS, ADMIN_ERROR, GET_AGENT_DETAILS, SET_STORE_LINK } from "../types";

const AdminState = (props) => {
    const initialState = {
        userCreated: null,
        updatedStoreLink: null,
        agents: null,
        agent: null,
        adminError: null,
    }

    const [state, dispatch] = useReducer(adminReducer, initialState);

    const URL = "http://localhost:8000/api";

    // Create Guruji
    const createUser = async (user) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }

        try {
            const res = await axios.post(`${URL}/admin/create-user`, user, config);

            dispatch({
                type: CREATE_USER,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: ADMIN_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const getAgents = async () => {
        try {
            const res = await axios.get(`${URL}/admin/get-agents`);

            dispatch({
                type: GET_AGENTS,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: ADMIN_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const getAgentDetails = async (reference) => {
        try {
            const res = await axios.get(`${URL}/admin/get-agent-details/${reference}`);

            dispatch({
                type: GET_AGENT_DETAILS,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: ADMIN_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    const setStoreLink = async (formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }

        try {
            const res = await axios.post(`${URL}/admin/set-store-link`, formData, config);

            dispatch({
                type: SET_STORE_LINK,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: ADMIN_ERROR,
                payload: error.response.data.message,
            });
        }
    }

    return (
        <AdminContext.Provider value={{
            userCreated: state.userCreated,
            updatedStoreLink: state.updatedStoreLink,
            agents: state.agents,
            agent: state.agent,
            adminError: state.adminError,
            createUser,
            getAgents,
            getAgentDetails,
            setStoreLink,
        }}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;