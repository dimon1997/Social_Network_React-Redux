import React from "react";
import { Field } from "redux-form";
import s from "./FormsControl.module.css";

const FormControl = ({ meta:{touched, error}, children }) => { //, ...props, child, input,
  const hasError = touched && error;

  return (
    <div className={s.formControl + "" + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps}></textarea>
    </FormControl>
  );
};
export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps}></input>
    </FormControl>
  );
};

export const createField = (placeholder, name, validatots, component,  props = {}, text="") => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validatots}
      component={component}
      {...props}

    />{text}
  </div>
);
