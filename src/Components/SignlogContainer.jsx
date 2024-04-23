import name from "../Assets/name.png";
import email from "../Assets/email.png";
import password from "../Assets/password.png";
import "./Signlogcss.css";
import { useState } from "react";

export default function SignlogContainer() {
  const [action, setAction] = useState("Sign Up");
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Log In" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={name} alt="NameIcon" />
              <input type="text" placeholder="Name" />
            </div>
          )}

          <div className="input">
            <img src={email} alt="EmailIcon" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={password} alt="PasswordIcon" />
            <input type="password" placeholder="Password" />
          </div>
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="forgotpass">
              Forgot Password? <span>Click here</span>
            </div>
          )}

          <div className="submition">
            <button
              className={action === "Log In" ? "submit buttonfade" : "submit"}
              onClick={() => setAction("Sign Up")}
            >
              Sign Up
            </button>
            <button
              className={action === "Sign Up" ? "submit buttonfade" : "submit"}
              onClick={() => setAction("Log In")}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
