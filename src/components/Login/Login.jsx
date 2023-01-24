import { connect } from "react-redux";
import { redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControl";
import { login} from "../redux/auth-reducer";
import s from "./Login.module.css"
// dimalavrinchuk1@ukr.net
// 556427556427

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]}/>
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const Login = (props) => {
    const onSubmit = (formData) =>{
       props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) return redirect("/profile")

  return (
    <div>
      <h1 className={s.hederLogin}> Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);
