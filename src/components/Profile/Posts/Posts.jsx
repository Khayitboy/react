import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormsControls';
import Post from './Post/Post';


const Posts = React.memo((props) => {
    
    let postsElem = props.posts.map((elem) => <Post key={elem.id} likesCount={elem.likesCount} message={elem.message} />)

    let addPost2 = (formData) => {
        props.addPost(formData.newPostText);
    };
    
    return (
        <div className="posts">
            <div className="posts__form">
                <AddPostFormRedux onSubmit={addPost2} />
            </div>
            <h2>My posts</h2>
            <div className="posts__container">
                {postsElem}
            </div>
        </div>
    );
});

const maxLength = maxLengthCreator(20);

const addPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} >
            <Field component={Textarea} id="post__form" name="newPostText" validate={[required, maxLength]} />
            <button>Create Post</button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form:"postAddMessageForm"})(addPostForm)

export default Posts;