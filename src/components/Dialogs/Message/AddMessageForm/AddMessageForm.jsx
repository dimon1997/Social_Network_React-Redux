import { maxLengthCreator, required } from "../../../../utils/validators/validators";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/FormsControls/FormsControl";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"newMessageBody"} validate={[required, maxLength50]}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);