const ADDMESSAGE = 'ADD-MESSAGE';
const UPDATEMESSAGE = 'UPDATE-MESSAGE';

let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {

    if(action.type === ADDMESSAGE){
        let newMessage = {
            id: 4,
            message: state.newMessage
        }
        state.messages.push(newMessage);
        state.newMessage = '';
    }
    else if(action.type === UPDATEMESSAGE){
        state.newMessage = action.newMessage;
    }
    return state;
}

export const addMessageActionCreator = () => {
    return {
        type:ADDMESSAGE
    }
}
export const onMessageChangeActionCreator = (text) => {
    return {
        type:UPDATEMESSAGE, newMessage:text
    }
}
export default dialogsReducer;