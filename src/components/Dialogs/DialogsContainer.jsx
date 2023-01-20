import { connect } from "react-redux";
import { compose } from "redux";
//import { withAuthRedirect } from "../hoc/withAuthRedirect";
import {
  sendMessageCreator,
  // updateNewMessageBodyCreator,
} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
    // updateNewMessageBody: (body) => {
    //   dispatch(updateNewMessageBodyCreator(body));
    // },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  //withAuthRedirect
  )(Dialogs)



// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;

