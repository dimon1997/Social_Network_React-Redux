import { connect } from "react-redux";
import { redirect } from "react-router-dom";
import {  reduxForm } from "redux-form"; //Field
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControl"; //createField,
import { login } from "../redux/auth-reducer";
import s from "./Login.module.css";
import style from "../common/FormsControls/FormsControl.module.css";
// dimalavrinchuk1@ukr.net
// 556427556427

const LoginForm = (props,{captchaUrl}) => {// handleSubmit, error
  return (
    <form onSubmit={props.handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {type: "password"})}
      {createField(null, "rememberMe", Input, { type: "checkbox" }, "remember me")}
      {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
      {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {}, "")}
       {/* <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
       <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />{" "}
        remember me
      </div> */}



      {props.error && <div className={style.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if (props.isAuth) return redirect("/profile");

  return (
    <div>
      <h1 className={s.hederLogin}> Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);

//  <div>
//         <Field
//           placeholder={"Email"}
//           name={"email"}
//           component={Input}
//           validate={[required]}
//         />
//       </div>
//       <div>
//         <Field
//           placeholder={"Password"}
//           name={"password"}
//           type={"password"}
//           component={Input}
//           validate={[required]}
//         />
//       </div>
//        <div>
//         <Field type={"checkbox"} name={"rememberMe"} component={Input} />{" "}
//         remember me
//       </div>
