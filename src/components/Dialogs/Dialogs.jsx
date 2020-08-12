import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    
   
    let dialogsElem = props.state.dialogs.map((elem) => <Dialog name={elem.name} id={elem.id}/>)

    let messagesElem = props.state.messages.map((elem) => <Message message={elem.message}/>)

    return (
        <div className={style.dialogs_wrapper}>
            <div className={style.users}>
                {dialogsElem}
            </div>
            <div className={style.dialogs}>
                {messagesElem}
            </div>
        </div>
    );
}

export default Dialogs;