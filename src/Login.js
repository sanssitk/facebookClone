import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";

import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider";

function Login() {

  const [state, dispatch] = useStateValue();

  const signIn = () => {
    //sign in
    auth
      .signInWithPopup(provider)
      .then((res) => {

        dispatch({
            type: actionTypes.SET_USER,
            user: res.user
        })
        console.log(res);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
          alt="fb__logo"
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt="fb__logo"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
