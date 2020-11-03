import React from 'react';
import style from './ProfileInfo.module.css';
import banner from './../../../banner.jpg';
const ProfileInfo = (props) => {
    return (
        <div className="">
            <div className="banner"><img src={banner} alt="Banner" /></div>
            <div className={style.description}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;