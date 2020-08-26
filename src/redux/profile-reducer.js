const ADDPOST = 'ADD-POST';
const UPDATEPOST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {

    switch(action.type){
        case ADDPOST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATEPOST:
            state.newPostText = action.newText
            return state;
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


export default profileReducer;