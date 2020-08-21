import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/state';

const Posts = (props) => {
    
    let postsElem = props.posts.map((elem) => <Post likesCount={elem.likesCount} message={elem.message} />)
    
    let newPost = React.createRef();

    let addPost2 = () => {
        debugger;
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPost.current.value;
        props.dispatch(onPostChangeActionCreator(text));
    }
    
    return (
        <div className="posts">
            <div className="posts__form">
                <form action="">
                    <textarea  onChange={onPostChange} id="post__form" ref={newPost} value={props.newPostText}></textarea>
                    <button onClick={ addPost2 } type="button">Create Post</button>
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