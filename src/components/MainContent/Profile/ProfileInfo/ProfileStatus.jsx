import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatusThunk(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {

        return (<>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} autoFocus={true}
                               value={this.state.status} type="text"/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>статус={this.props.status}</span>
                    </div>}
            </>
        )
    }


}

export default ProfileStatus;