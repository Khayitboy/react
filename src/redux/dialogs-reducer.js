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
    let stateCopy = {...state};
    if(action.type === ADDMESSAGE){
        let newMessage = {
            id: 4,
            message: state.newMessage
        }
        stateCopy.messages = [...state.messages];
        stateCopy.messages.push(newMessage);
        stateCopy.newMessage = '';
    }
    else if(action.type === UPDATEMESSAGE){
        stateCopy.newMessage = action.newMessage;
    }
    return stateCopy;
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