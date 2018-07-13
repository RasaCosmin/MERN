import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from "./types";

//get current profile
export const getCurrentProfile = () => dispach => {
  dispach(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res =>
      dispach({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispach({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

//create profile
export const createProfile = (profileData, history) => dispach => {
  axios
    .post("/api/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispach({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//delete current account and profile
export const deleteAccount = () => dispatch => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    axios
      .delete("/api/profile")
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.errors
        })
      );
  }
};

//profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

//clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

//add experience
export const addExperience = (expData, history) => dispach => {
  axios
    .post("/api/profile/experience", expData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispach({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//add education
export const addEducation = (eduData, history) => dispach => {
  axios
    .post("/api/profile/education", eduData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispach({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//delete experience
export const deleteExperience = id => dispach => {
  axios
    .delete(`/api/profile/experience/${id}`)
    .then(res =>
      dispach({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispach({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//delete education
export const deleteEducation = id => dispach => {
  axios
    .delete(`/api/profile/education/${id}`)
    .then(res =>
      dispach({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispach({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
