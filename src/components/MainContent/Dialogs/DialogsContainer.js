import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {isAuth: state.Auth.isAuth}
}

export default connect(mapStateToProps, {})(Dialogs);