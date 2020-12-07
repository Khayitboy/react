import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormControls/FormsControls';
import style from './../common/FormControls/FormControls.module.css';

const maxLength = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} validate={[required, maxLength]}  name="email" placeholder="Email"/></div>
            <div><Field component={Input} validate={[required, maxLength]} name="password" placeholder="Password" type="password" /></div>
            <div><Field component={Input} validate={[required, maxLength]} type="checkbox" name="rememberMe" />remember me</div>
            {props.captchaUrl && <img src={props.captchaUrl} alt="captcha" />}
            {props.captchaUrl && <div><Field component={Input} name="captcha" validate={[required]} placeholder="Captcha"/></div>}
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) return <Redirect to={"/profile"} />

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);