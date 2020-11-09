import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;
    let dialogsElem = state.dialogs.map((elem) => <Dialog name={elem.name} id={elem.id}/>)
    let messagesElem = state.messages.map((elem) => <Message message={elem.message}/>)

    let addNewMessage = (formData) => {
        props.addMessage2(formData.newMessage);
    }

    return (
        <div className={style.dialogs_wrapper}>
            <div className={style.users}>
                {dialogsElem}
            </div>
            <div className={style.dialogs}>
                {messagesElem}
                <div className={style.message_form}>
                    <AddMessageFormRedux onSubmit={addNewMessage} />   
                </div>
            </div>
        </div>
    );
}

const maxLength = maxLengthCreator(50);

const addMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength]} name="newMessage" placeholder="Enter new message" />
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(addMessageForm);

export default Dialogs;