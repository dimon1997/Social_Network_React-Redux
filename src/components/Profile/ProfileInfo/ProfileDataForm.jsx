import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControl";
import s from "./ProfileInfo.module.css";
import style from "../../common/FormsControls/FormsControl.module.css"

const ProfileDataForm = ({handleSubmit, profile, error }) => {
  return  <form onSubmit={handleSubmit}>
  <div><button>save</button></div>
  {error && <div className={style.formSummaryError}>{error}</div>}
  <b>Full Name:</b> {createField("Full name", "fullName", [], Input)}
  <b>Looking for a job:</b> {createField("", "lookingForAJob", [], Input, {type:"checkbox"})}
  <b>My professional skills:</b>  {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
  <b>About me:</b> {createField("About me:", "aboutme", [], Textarea)}
  <div>
        Contacts:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contacts}>
              <b>{key}:{createField(key, "contacts." + key, [], Input)}</b>
            </div>
          );
        })}
      </div>
</form>;
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
