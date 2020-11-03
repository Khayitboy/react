const ADDPOST = 'ADD-POST';
const UPDATEPOST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: "What's going on here?", likesCount: 5 },
        { id: 2, message: "how are you?", likesCount: 10 },
    ],
    newPostText: 'it-kamasutra'
};

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADDPOST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATEPOST:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText
            return stateCopy;
        }
        default:
            return state;

    }
}

export const addPostActionCreator = () => {
    return {
        type: ADDPOST
    }
}

export const onPostChangeActionCreator = (text) => {
    return {
        type:UPDATEPOST,
        newText:text
    }
}

export const setUserProfile = (profile) => {
    return {
        type:SET_USER_PROFILE,
        profile
    }
}


export default profileReducer;