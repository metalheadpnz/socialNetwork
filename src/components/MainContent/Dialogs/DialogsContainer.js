import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

let AuthRedirectComponent =  withAuthRedirect(Dialogs)

export default connect(null, {})(AuthRedirectComponent);