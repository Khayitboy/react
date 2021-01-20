import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { AppStateType } from '../../../redux/redux-store';
import { postsType } from '../../../types/types';
import Posts from './Posts';


type mapStateToPropsType = {
    posts: Array<postsType>
    newPostText: string
}

type mapDispatchToPropsType = {
    addPostActionCreator: (newPostText:string) => void
}
type ownPropsType = {
    
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPost
    }
}

const PostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, ownPropsType, AppStateType>(mapStateToProps,{addPostActionCreator})(Posts);

export default PostsContainer;