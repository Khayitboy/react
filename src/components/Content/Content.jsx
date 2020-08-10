import React from 'react';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = () => {
    return (
        <div>
            <ProfileInfo />
            <Posts />
        </div>
    );
}

export default Content;