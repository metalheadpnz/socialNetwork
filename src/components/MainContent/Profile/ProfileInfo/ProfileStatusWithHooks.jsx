import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let enableEditMode = (event) => {
        setEditMode(true)
    }
    let disableEditMode = () => {
        setEditMode(false);
        props.updateUserStatusThunk(status);
    }

    let [status, setStatus] = useState(props.status);
    let onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }

    useEffect(()=> {
        setStatus(props.status);
        // console.log('effect');
    }, [props.status])

    return (<>
            {editMode
                ? <div>
                    <input onChange={onStatusChange} value={status} type="text" onBlur={disableEditMode}
                           autoFocus={true}/>
                </div>
                : <div>
                    <span onDoubleClick={enableEditMode}>статус={props.status}</span>
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