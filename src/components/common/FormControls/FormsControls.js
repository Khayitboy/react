import React from 'react';
import styles from './FormControls.module.css';

const FormControl = ({input, child, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError ? <span>{meta.error}</span> : ""}
        </div>
    )
}

export const Textarea = (props) => { 
    const {input, child, meta, ...restProps} = props;
    return(
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input = (props) => {
    const {input, child, meta, ...restProps} = props;
    return(
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}