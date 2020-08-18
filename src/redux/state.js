let renderEntireTree;

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "What's going on here?", likesCount: 5 },
            { id: 2, message: "how are you?", likesCount: 10 },
        ],
        newPostText: 'it-kamasutra'
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "User" },
            { id: 3, name: "User 2" },
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Lorem ipsum dolor sit amet consectetur adipisicing." },
            { id: 3, message: "What's up" },
        ],
        newMessage: 'new message'
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
export let updateNewPost = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessage
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    renderEntireTree(state);
}
export let updateMessage = (newMessage) => {
    state.dialogsPage.newMessage = newMessage;
    renderEntireTree(state);
}


export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;