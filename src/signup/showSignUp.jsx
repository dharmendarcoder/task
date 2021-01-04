import { configureStore } from "@reduxjs/toolkit";
import { connect } from "react-redux";

const SHOW_DATA = "signupdata/show";

export const SHOWDATA = (payload) => {
  return {
    type: SHOW_DATA,
    payload,
  };
};

const initialState = {
  name: "",
  email: "",
  username: "",
  password: "",
};

function signUpReducer(state = initialState, action) {
  if (action.type === SHOW_DATA) {
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      username: action.payload.userName,
      password: action.payload.password,
    };
  }
  return { ...state };
}

export const Store = configureStore({
  reducer: {
    signUp: signUpReducer,
  },
});

const ShowRedux = ({ state }) => {
  return (
    <ul>
      <li>Name: {state.name}</li>
      <li>Email: {state.email} </li>
      <li>User Name: {state.username}</li>
      <li>Password: {state.password}</li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.signUp,
  };
};

export default connect(mapStateToProps, null)(ShowRedux);
