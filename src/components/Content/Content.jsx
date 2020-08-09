import React from 'react';
import banner from './../../banner.jpg';
import Posts from './Posts/Posts';

const Content = () => {
    return (
        <div>
            <div className="banner"><img src={banner} alt="Banner" /></div>
            <div>
                ava+description
            </div>
            <Posts />
        </div>
    );
}

export default Content;