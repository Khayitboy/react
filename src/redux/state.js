import { renderEntireTree } from "../render";

let state = {
    profilePage:{
        posts: [
            { id: 1, message: "What's going on here?", likesCount: 5 },
            { id: 2, message: "how are you?", likesCount: 10 },
        ],
    },
    dialogsPage:{
        dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "User" },
            { id: 3, name: "User 2" },
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Lorem ipsum dolor sit amet consectetur adipisicing." },
            { id: 3, message: "What's up" },
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id:5,
        message:postMessage,
        likesCount:0
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export default state;