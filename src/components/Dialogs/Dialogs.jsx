import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewPost, addMessage, updateMessage, addMessageActionCreator, onPostChangeActionCreator, onMessageChangeActionCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    
   
    let dialogsElem = props.dialogsPage.dialogs.map((elem) => <Dialog name={elem.name} id={elem.id}/>)

    let messagesElem = props.dialogsPage.messages.map((elem) => <Message message={elem.message}/>)

    let messageText = React.createRef();

    let addMessage2 = () => {
        // props.addMessage();
        props.dispatch(addMessageActionCreator());
    } 

    let onMessageChange2 = () => {
        let text = messageText.current.value;
        // props.updateMessage(text);
        props.dispatch(onMessageChangeActionCreator(text));
    } 


    return (
        <div className={style.dialogs_wrapper}>
            <div className={style.users}>
                {dialogsElem}
            </div>
            <div className={style.dialogs}>
                {messagesElem}
                <div className={style.message_form}>
                    <form action="">
                        <textarea ref={messageText} value={props.dialogsPage.newMessage} onChange={onMessageChange2}></textarea>
                        <button onClick={addMessage2} type="button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;