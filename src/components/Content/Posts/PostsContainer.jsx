import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';
import Posts from './Posts';


// const PostsContainer = () => {
    
//     return (
//         <StoreContext.Consumer >{
//             (store) =>{
//                 let state = store.getState();
//                 let addPost2 = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//                 let onPostChange = (text) => {
//                     store.dispatch(onPostChangeActionCreator(text));
//                 };
//                 return(
//                     <Posts 
//                       updateNewPostText={onPostChange}
//                       addPost={addPost2}
//                       posts={state.profilePage.posts} 
//                       newPostText={state.profilePage.newPostText}
//                       />
//                 )}
//             }
//         </StoreContext.Consumer>
//     );
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(onPostChangeActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator()); 
        }
    }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;