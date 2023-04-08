import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAuthContext } from "../../hooks/useAuthContext";

function Signup() {
  const { dispatch } = useAuthContext();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const [name, setName] = useState();

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const names = name.split(" ");
    axios
      .post("https://cs-dj.workspaceomkarb.repl.co/user/register", {
        email: email,
        password: password,
        firstname: names[0],
        lastname: names[names.length - 1],
        mobilenum: number,
      })
      .then((response) => {
        setErrorMessage("ok");
      })
      .catch((err) => {
        console.log(err.message);
        setErrorMessage("Incorrect details");
      });
  }
  return (
    <div className="login-wrapper">
      <Navbar />
      <div className="content-wrapper">
        <div className="login-form-container">
          <form className="login-form">
            <h1>Sign up to bring a better future of our kids.</h1>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p style={{ color: errorMessage === "ok" ? "green" : "red" }}>
              {errorMessage === "ok"
                ? "Signup Successfull, Please login"
                : errorMessage}
            </p>
            <div>
              <Link>Forget Password?</Link>
            </div>
            <button type="button" onClick={handleSubmit}>
              Sign in
            </button>
            <div className="login-subtitle">
              <p>New Here?</p>
              <Link to="/aboutyou">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
