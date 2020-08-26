const ADDMESSAGE = 'ADD-MESSAGE';
const UPDATEMESSAGE = 'UPDATE-MESSAGE';

const dialogsReducer = (state, action) => {

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