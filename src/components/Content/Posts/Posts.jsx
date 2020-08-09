import React from 'react';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div className="posts">
            <div className="posts__form">
                <form action="">
                    <textarea id="post__form"></textarea>
                    <button>Create Post</button>
                </form>
            </div>
            <h2>My posts</h2>
            <div className="posts__container">
                <Post likesCount="5" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, harum.1" />
                <Post likesCount="10" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, harum.2" />
                <Post likesCount="15" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, harum.3" />
                <Post likesCount="20" message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, harum.4" />
            </div>
        </div>
    );
}

export default Posts;