import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let hooksState = useState(true);
    let editMode = hooksState[0]
    console.log(editMode);
    return (<>
            {editMode
                ? <div>
                    <input type="text"/>
                </div>
                : <div>
                    <span>статус={props.status}</span>
                </div>}
        </>
    )
}

export default ProfileStatusWithHooks;

// {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//
//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         })
//     }
//
//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false
//         });
//         this.props.updateUserStatusThunk(this.state.status);
//     }
//
//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         });
//     }
//
//     componentDidUpdate(prevProps, prevState)
//     {
//         // console.log('update')
//         if (prevProps.status !== this.props.status) {
//             // console.log('if')
//             this.setState({status: this.props.status})
//         }
//     }
// }