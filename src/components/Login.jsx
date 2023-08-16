import React, { useEffect, useRef, useState } from "react";
import "../styles/landing.css";
import emoSphere from "../assets/EmoSphere (1).png";
import banner from '../assets/pexels-pavel-danilyuk-8638612.jpg';

const Login = () => {
  const [visibility, setVisibility] = useState(false);

  const noneDisplay = () => {
    if(visibility === true) {
      welcome.current.style.display = 'none';
      login.current.style.display = 'flex';
    }
    return;
  }
  
  const welcome = useRef();
  const login = useRef();

  useEffect(() => {
    console.log(visibility)
    console.log(welcome)
    console.log(login)
    noneDisplay();

  }, [visibility])
  
  return (
    //Here we have both components landing and logging/ when the button is clicked the state will be true / then the display changes
    //Create a state for when the button is clicked
    //use display none to change the visibility
    //add animation for the change
    <div className="landing">
      <div className="welcome" ref={welcome}>
        <img src={emoSphere} className="logo" />
        <h4 className="landing-text">
          Welcome to your personal space to express, learn, and grow through
          written reflections on your emotions.
        </h4>
        <button className="button" onClick={() => { setVisibility(true)}}>Log In</button>
        <p className="copy">© 2023 Emosphere. All rights reserved. </p>
      </div>

      <div className="login-screen slideIn-right" ref={login}>
        <img src={emoSphere} className="logo" />
        <h2 className="title">Log In</h2>
        <p>
          Don't have an account yet?<span> Register</span>
        </p>
        <div className="inputs">
          <label>Email</label>
          <input type="text" />
          <label>Password</label>
          <input type="text" />
          <button className="button">Log In </button>
          <p className="forgotten-password">Forgot Your Password?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
