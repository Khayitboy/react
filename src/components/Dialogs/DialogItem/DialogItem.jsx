import React from 'react';
import style from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <div className={style.user}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;