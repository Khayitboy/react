import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className={style.user}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs_wrapper}>
            <div className={style.users}>
                <Dialog name="Dimych" id="1"/>
                <Dialog name="User 2" id="2"/>
                <Dialog name="User 3" id="3"/>
                <Dialog name="User 4" id="4"/>
                <Dialog name="User 5" id="5"/>
                <Dialog name="User 6" id="6"/>
                <Dialog name="User 7" id="7"/>
            </div>
            <div className={style.dialogs}>
                <Message message="Hi"/>
                <Message message="Lorem ipsum dolor sit amet consectetur adipisicing."/>
                <Message message="Lorem ipsum dolor sit amet consectetur adipisicing."/>
                <Message message="Lorem ipsum dolor sit amet consectetur adipisicing."/>
                <Message message="Lorem ipsum dolor sit amet consectetur adipisicing."/>
                <Message message="Lorem ipsum dolor sit amet consectetur adipisicing."/>
                <Message message="Lorem ipsum dolor sit amet consectetur adipisicing."/>
            </div>
        </div>
    );
}

export default Dialogs;