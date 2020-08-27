import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        },
        sidebar: {

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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
}


export default store;