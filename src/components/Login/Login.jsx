import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/FormControls/FormsControls';

const maxLength = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} validate={[required, maxLength]}  name="login" placeholder="Login"/></div>
            <div><Field component={Input} validate={[required, maxLength]} name="password" placeholder="Password"/></div>
            <div><Field component={Input} validate={[required, maxLength]} type="checkbox" name="rememberMe" />remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;