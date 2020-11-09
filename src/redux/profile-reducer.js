import { profileAPI } from "../api/api";


const ADDPOST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: "What's going on here?", likesCount: 5 },
        { id: 2, message: "how are you?", likesCount: 10 },
    ],
    profile: null,
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
        default:
            return state;

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

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
            dispatch(setStatus(status));
        }
    });
}

export default profileReducer;