import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/images/avatar.jpg";
import { useState } from 'react';
import ProfileReduxForm from './ProfileDataForm';

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile){
        return <Preloader />
    }

    const onPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    const activateEditMode = () => {
        setEditMode(true);
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData);
        debugger;
        if(props.formStatus){
            setEditMode(false);
        }
    }


    return (
        <div>
            <div className={style.description}>
                <div className={style.image}>
                    <img src={props.profile.photos.large || userPhoto} alt=""/>
                    {props.isOwner && <input type={"file"} onChange={onPhotoSelected} />}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />    
                </div>
                {editMode ? <ProfileReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> : <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={activateEditMode} />}
            </div>
        </div>
    );
}


const Contact = ({contactTitle, contactValue}) => {
    return <div  className={style.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

const ProfileData = (props) => {
  return (
    <div>
        {props.isOwner &&<div><button onClick={props.activateEditMode}>edit profile data</button></div>}
      <div>
        <b>Fullname</b>: {props.profile.fullName}{" "}
      </div>
      <div>
        <b>Looking for a job</b>: {props.profile.lookingForAJob ? "Yes" : "No"}{" "}
      </div>
      {props.profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>:{" "}
          {props.profile.lookingForAJobDescription}{" "}
        </div>
      )}
      <div>
        <b>About me</b>: {props.profile.aboutMe}{" "}
      </div>
      <div>
        <b>Contacts</b>:<br />{" "}
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}{" "}
      </div>
    </div>
  );
};

export default ProfileInfo;