import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/images/avatar.jpg";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }

    const onPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={style.description}>
                <img src={props.profile.photos.large || userPhoto} alt=""/>
                {props.isOwner && <input type={"file"} onChange={onPhotoSelected} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;