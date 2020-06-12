import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/AuthReducer";
import * as axios from "axios";
import {toggleIsFetching} from "../../redux/UsersReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
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
