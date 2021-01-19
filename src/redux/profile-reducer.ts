import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
import { photosType, postsType, profileType } from "../types/types";


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
    ] as Array<postsType>,
    profile: null as profileType | null,
    formStatus:false,
    status: '',
    newPost: ''
};
export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {

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
            return{...state,profile:{...state.profile, photos:action.photos} as profileType}
        }
        case FORM_ERROR_STATUS: {
            return {...state,formStatus: action.formStatus}
        }
        default:
            return state;

    }
}

type setFormErrorStatusActionType = {
    type: typeof FORM_ERROR_STATUS
    formStatus: boolean
}

export const setFormErrorStatus = (formStatus: boolean): setFormErrorStatusActionType => {
    return {
        type: FORM_ERROR_STATUS,
        formStatus
    }
}

type addPostActionCreatorActionType = {
    type: typeof ADDPOST
    newPostText: string
}

export const addPostActionCreator = (newPostText:string): addPostActionCreatorActionType => {
    return {
        type: ADDPOST,
        newPostText
    }
}

type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: profileType
}

export const setUserProfile = (profile: profileType): setUserProfileActionType => {
    return {
        type:SET_USER_PROFILE,
        profile
    }
}

type setStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export const setStatus = (status: string): setStatusActionType => {
    return {
        type:SET_STATUS,
        status
    }
}

type deletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}

export const deletePost = (postId: number): deletePostActionType => {
    return {
        type:DELETE_POST,
        postId
    }
}
type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: photosType
}

export const savePhotoSuccess = (photos: photosType): savePhotoSuccessActionType => {
    return {
        type:SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
        if(response.data.resultCode === 0){
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
}

export const saveProfile = (profile: profileType) => async (dispatch: any, getState: any) => {
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