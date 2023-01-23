import React from "react";
import { redirect } from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import AddMessageForm from "./Message/AddMessageForm/AddMessageForm";
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

  let addNewMessage = (values) =>{
    props.sendMessage(values.newMessageBody);
    // alert(values.newMessageBody)
  }

  if (props.isAuth === false) return redirect("/login");
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{DialogsElements}</div>
      <div className={s.messages}>
        <div>{MessagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};




export default Dialogs;
