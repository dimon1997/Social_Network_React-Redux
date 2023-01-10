import React from "react";
import { redirect } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let DialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let MessagesElements = state.messages.map((m) => (
    <Message
      message={m.message}
      newMessageBody={state.newMessageBody}
      dispatch={props.dispatch}
      key={m.id}
    />
  ));

  let newMessageElement = React.createRef(); 
  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageCange = () =>{
    let body = newMessageElement.current.value;
    props.updateNewMessageBody(body);
    // props.dispatch(updateNewMessageBodyCreator(body));
  }

 if(props.isAuth === false) return redirect ('/login');
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{DialogsElements}</div>
      <div className={s.messages}>
        <div>{MessagesElements}</div>
        <div>
          <textarea 
          // placeholder="Enter your message"
          onChange={onNewMessageCange}
          ref={newMessageElement}
          value={state.newMessageBody}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

// let dialogsElements =
// props.dialogs.dialogs.map((d) =>{
//   return (
//     <DialogItem name={d.name} id={d.id} />
//   );
// })
// let messagesElements =
// props.dialogs.messages.map((m)=>{
//   return (
//     <Message message={m.message} />
//   );
// })
