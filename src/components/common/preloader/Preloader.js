import preloader from '../../../assets/images/loader.gif';
import styles from './preloader.module.css';
import React from 'react';

let Preloader = (props) => {
    return <div className={styles.bg}>
            <img src={preloader} alt=""/> 
        </div>
    
}

export default Preloader;