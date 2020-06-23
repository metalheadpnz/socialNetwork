import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formControls/formControls";
import {required} from "../../utilities/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";



let LoginForm = (props) => {

    // console.log('render')

    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required]} name="email" placeholder="email" type="text"/>
            </div>
            <div>
                <Field component={Input} validate={[required]} type={"password"} name="password" placeholder="Password"
                />
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
        props.login(formData.email, formData.password, formData.rememberMe)
        // console.log(formData)
    }
    if (props.isAuth) {
        return <Redirect to={"/Profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);