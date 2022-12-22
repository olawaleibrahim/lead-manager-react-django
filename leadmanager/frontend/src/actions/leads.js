import axios from "axios";
import { createMessage } from "./messages";
import { tokenConfig } from "./auth";

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
    axios.get("/api/leads/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

// DELETE LEADS
export const deleteLead = (id) => (dispatch, getState) => {
    axios.delete(`/api/leads/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ leadAdded: "Lead Added" }));
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        }).catch(err => console.log(err));
};

// ADD LEAD
export const addLead = (lead) => (dispatch, getState) => {
    axios.post("/api/leads/", lead, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            });
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.data
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};