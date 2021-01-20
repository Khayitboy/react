const ADDMESSAGE = 'ADD-MESSAGE';

type DialogType = {
    id: number 
    name: string
}
type MessageType = {
    id: number 
    message: string
}

let initialState = {
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "User" },
        { id: 3, name: "User 2" },
    ] as Array<DialogType>,
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Lorem ipsum dolor sit amet consectetur adipisicing." },
        { id: 3, message: "What's up" },
    ] as Array<MessageType>
};

export type initialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): initialStateType => {
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

type addMessageActionType = {
    type: typeof ADDMESSAGE
    newMessage: string
}

export const addMessageActionCreator = (newMessage: string): addMessageActionType => {
    return {
        type:ADDMESSAGE,
        newMessage
    }
}

export default dialogsReducer;