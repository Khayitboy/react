import React from 'react';
import Post from './Post/Post';

const Posts = () => {
    let posts = [
        {id: 1, message: "What's going on here?", likesCount:5},
        {id: 2, message: "how are you?", likesCount:10},
    ];
    let postsElem = posts.map((elem) => <Post likesCount={elem.likesCount} message={elem.message} />)
    
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
                {postsElem}
            </div>
        </div>
    );
}

export default Posts;