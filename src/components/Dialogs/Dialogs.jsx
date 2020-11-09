import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElem = state.dialogs.map((elem) => <Dialog name={elem.name} id={elem.id}/>)

    let messagesElem = state.messages.map((elem) => <Message message={elem.message}/>)

    let messageText = React.createRef();

    let addMessage2 = () => {
        props.addMessage2();
    } 

    let onMessageChange2 = () => {
        let text = messageText.current.value;
        props.onMessageChange2(text);
    } 

    return (
        <div className={style.dialogs_wrapper}>
            <div className={style.users}>
                {dialogsElem}
            </div>
            <div className={style.dialogs}>
                {messagesElem}
                <div className={style.message_form}>
                    <AddMessageFormRedux />   
                </div>
            </div>
        </div>
    );
}

const addMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newMessage" placeholder="Enter new message" />
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(addMessageForm);

export default Dialogs;