import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/AuthReducer";
import {toggleIsFetching} from "../../redux/UsersReducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.authMe ()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {email, id, login} = response.data.data
                    this.props.setAuthData(id, email, login)
                }
                this.props.toggleIsFetching(false);
            });
    }

    render() {
        return <Header id={this.props.id}
                       email={this.props.email}
                       login={this.props.login}
                       isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.AuthReducer.id,
        email: state.AuthReducer.email,
        login: state.AuthReducer.login,
        isAuth: state.AuthReducer.isAuth
    }
}

export default connect(mapStateToProps, {setAuthData, toggleIsFetching})(HeaderContainer);
