import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {
  

    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPost={props.updateNewPost} />
        </div>
    );
}

export default Content;