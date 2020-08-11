import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "User"},
        {id: 3, name: "User 2"},
    ];
    let dialogsElem = dialogs.map((elem) => <Dialog name={elem.name} id={elem.id}/>)

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Lorem ipsum dolor sit amet consectetur adipisicing."},
        {id: 3, message: "What's up"},
    ];

    let messagesElem = messages.map((elem) => <Message message={elem.message}/>)

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