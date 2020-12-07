import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { Input, Textarea } from '../../common/FormControls/FormsControls';
import style from './ProfileInfo.module.css';
import s from '../../common/FormControls/FormControls.module.css';

const ProfileDataForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <button>save</button>
        </div>
        {props.error && <div className={s.formSummaryError}>{props.error}</div>}
        <div>
          <b>Fullname</b>:
          <Field component={Input} id="fullName" name="fullName" validate={[required]} />
        </div>
        <div>
          <b>Looking for a job</b>:
          <Field component={Input} id="lookingForAJob" name="lookingForAJob" type="checkbox" validate={[required]} />
        </div>
        <div>
          <b>My professional skills</b>:
          <Field component={Textarea} id="lookingForAJobDescription" name="lookingForAJobDescription" validate={[required]} />
        </div>
        <div>
          <b>About me</b>:
          <Field component={Textarea} id="aboutMe" name="aboutMe" validate={[required]} />
        </div>
        <div>
        <b>Contacts</b>:<br />
        {Object.keys(props.profile.contacts).map((key) => {
          return <div key={key} className={style.contact}>
              <b>{key}:</b>
              <Field component={Input}  name={"contacts."+key} />
          </div>
        })}
      </div>
      </form>
    );
}


const ProfileReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm);

export default ProfileReduxForm;