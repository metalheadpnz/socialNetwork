import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/formControls/formControls";
import {required} from "../../../utilities/validators/validators";


let LoginForm = (props) => {

    // console.log('render')

    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required]} name="login" placeholder="Login" type="text"/>
            </div>
            <div>
                <Field component={Input} validate={[required]} name="password" placeholder="Password" type="text"/>
            </div>
            <div>
                <Field component={Input} name="rememberMe" type="checkbox"/> remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;