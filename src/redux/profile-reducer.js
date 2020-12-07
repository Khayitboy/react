import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";


const ADDPOST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const FORM_ERROR_STATUS = 'FORM_ERROR_STATUS';

let initialState = {
    posts: [
        { id: 1, message: "What's going on here?", likesCount: 5 },
        { id: 2, message: "how are you?", likesCount: 10 },
    ],
    profile: null,
    formStatus:false,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADDPOST:{
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state,profile: action.profile}
        }
        case SET_STATUS: {
            return {...state,status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts:state.posts.filter(p => p.id !== action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return{...state,profile:{...state.profile, photos:action.photos}}
        }
        case FORM_ERROR_STATUS: {
            return {...state,formStatus: action.formStatus}
        }
        default:
            return state;

    }
}

export const setFormErrorStatus = (formStatus) => {
    return {
        type: FORM_ERROR_STATUS,
        formStatus
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADDPOST,
        newPostText
    }
}

export const setUserProfile = (profile) => {
    return {
        type:SET_USER_PROFILE,
        profile
    }
}

export const setStatus = (status) => {
    return {
        type:SET_STATUS,
        status
    }
}

export const deletePost = (postId) => {
    return {
        type:DELETE_POST,
        postId
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type:SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
        if(response.data.resultCode === 0){
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
        if(response.data.resultCode === 0){
            dispatch(getUserProfile(userId));
            dispatch(setFormErrorStatus(true));
        }
        else{
          dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
          dispatch(setFormErrorStatus(false));
        }
}

export default profileReducer;