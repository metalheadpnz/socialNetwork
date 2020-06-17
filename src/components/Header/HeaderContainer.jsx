import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getIsAuth} from "../../redux/AuthReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getIsAuth();
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
        id: state.Auth.id,
        email: state.Auth.email,
        login: state.Auth.login,
        isAuth: state.Auth.isAuth
    }
}

export default connect(mapStateToProps, {getIsAuth})(HeaderContainer);
