const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");
import { render } from '@testing-library/react';
import React from 'react';


let state = {
    posts: [
        { id: 1, message: "What's going on here?", likesCount: 5 },
        { id: 2, message: "how are you?", likesCount: 10 },
    ]
};

test('new post should be added', () => {
    let action = addPostActionCreator("qwerty uiop");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);

});


  test('new post should be added 2', () => {
    let action = deletePost(1);
   
    let newState = profileReducer(state, action);
   
    // expect(newState.posts[3].message).toBe("qwerty uiop");
    expect(newState.posts.length).toBe(2);
});






