const ADDMESSAGE = 'ADD-MESSAGE';

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
    ]
};


const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    if(action.type === ADDMESSAGE){
        let newMessage = {
            id: 4,
            message: action.newMessage
        }
        stateCopy.messages = [...state.messages];
        stateCopy.messages.push(newMessage);
    }
    return stateCopy;
}

export const addMessageActionCreator = (newMessage) => {
    return {
        type:ADDMESSAGE,
        newMessage
    }
}

export default dialogsReducer;