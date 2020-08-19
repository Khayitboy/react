let store = {
    _state: {
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
    },
    _callSubscriber() {

    },
    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessage
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessage = '';
        this._callSubscriber(this._state);
    },
    _updateMessage(newMessage) {
        this._state.dialogsPage.newMessage = newMessage;
        this._callSubscriber(this._state);
    }, 
    dispatch(action) {
        if(action.type === 'ADD-POST'){
            this._addPost();
        }
        else if(action.type === 'UPDATE-NEW-POST'){
            this._updateNewPost(action.newText);
        }
        else if(action.type === 'ADD-MESSAGE'){
            this._addMessage();
        }
        else if(action.type === 'UPDATE-MESSAGE'){
            this._updateMessage(action.newMessage);
        }
    },
}


export default store;