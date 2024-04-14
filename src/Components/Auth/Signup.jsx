import React, { useState, useEffect } from "react";
import "./Signup.css";
function Signup() {
  const [authToggle, setAuthToggle] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      {authToggle ? (
        <div className={`sign-up ${isMounted ? "fade-in" : "fade-out"}`}>
          <div className="container">
            <div className="sign-in">
              <h1 className="sign-in-title">Already A user?</h1>
              <p className="sign-up-para">
                To acess your account please login with your credentials
              </p>
              <button
                className="sign-in-btn"
                onClick={(e) => {
                  setAuthToggle(!authToggle);
                }}
              >
                SIGN IN
              </button>
            </div>
            <div className="sign-up-field">
              <h2 className="sign-up-field-title">Create Account</h2>
              <input placeholder="name" className="input" />
              <input placeholder="email" type="email" className="input" />
              <input placeholder="password" type="password" className="input" />
              <input
                placeholder="confirm-password"
                type="password"
                className="input"
              />
              <button className="sign-in-btn">Sign up</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={`sign-up ${isMounted ? "fade-out" : "fade-in"}`}>
          <div className="container">
            <div className="sign-up-field">
              <h2 className="sign-up-field-title">Sign in</h2>

              <input placeholder="email" type="email" className="input" />
              <input placeholder="password" type="password" className="input" />

              <button className="sign-in-btn">Sign in</button>
            </div>

            <div className="sign-in">
              <h1 className="sign-in-title">New Here?</h1>
              <p className="sign-up-para">
                Create a account and start the journey!!!
              </p>
              <button
                className="sign-in-btn"
                onClick={(e) => {
                  setAuthToggle(!authToggle);
                }}
              >
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Signup;
