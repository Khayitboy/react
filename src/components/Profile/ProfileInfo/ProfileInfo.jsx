import React from 'react';
import style from './ProfileInfo.module.css';
import banner from './../../../banner.jpg';
import Preloader from '../../common/preloader/Preloader';
const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return (
        <div className="">
            <div className="banner"><img src={banner} alt="Banner" /></div>
            <div className={style.description}>
                <img src={props.profile.photos.large} alt=""/>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;