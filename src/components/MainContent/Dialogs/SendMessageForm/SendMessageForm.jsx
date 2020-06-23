import React from "react";
import s from './SendMessageForm.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/formControls/formControls";
import {maxLengthCreator, required} from "../../../../utilities/validators/validators";

let maxLength20 = maxLengthCreator(20);

let ReduxSendMessageFormContainer = (props) => {

    let addNewMessage = (val) => {
        props.addNewMessage(val.newMessageText);
    }

    return (<ReduxSendMessageForm onSubmit={addNewMessage}/>
    );
}

const SendMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit} className={s.SendMessageForm}>
            <Field component={Textarea}
                   validate={[required, maxLength20]}
                   name="newMessageText"/>
            <button>Send</button>
        </form>
    )
}

const ReduxSendMessageForm = reduxForm({form: 'SendMessageForm'})(SendMessageForm)

export default ReduxSendMessageFormContainer;