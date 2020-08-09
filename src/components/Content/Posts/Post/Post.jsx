import React from 'react';
import post_img from './post_img.jpg';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post__item}>
            <div className={style.post__img}>
                <img src={post_img} alt=""/>
            </div>
            <div>
                <p>{props.message}</p>
                <p>Likes <span>{props.likesCount}</span></p>
            </div>
        </div>
    );
}

export default Post;