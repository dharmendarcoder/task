import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { SHOWDATA } from "./showSignUp";

function SignUp({ SHOWDATA }) {
  const delay = (duration) =>
    new Promise((resolve) => {
      setTimeout(resolve, duration);
    });

  const onSubmit = async (values) => {
    await delay(300);
    SHOWDATA(values);
    alert(JSON.stringify(values, 0, 2));
  };

  const required = (value) => (value ? undefined : "*");

  const passwordValidator = (pass) => {
    return new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
    ).test(pass)
      ? undefined
      : `! password must contain one small letter, 
      one capital letter, one numeric value and 
      a special character`;
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values, submitting, form, pristine }) => (
        <div>
          <Field name="name" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Name</label>
                <input placeholder="full name" type="text" {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="userName" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>User Name</label>
                <input placeholder="user name" type="text" {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>E-mail</label>
                <input placeholder="email id" type="email" {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="password"
            validate={(value) => {
              return required(value) || passwordValidator(value);
            }}
          >
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input placeholder="password" type="password" {...input} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button
            type="submit"
            disabled={pristine || submitting}
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      )}
    />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    SHOWDATA: (values) => dispatch(SHOWDATA(values)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
