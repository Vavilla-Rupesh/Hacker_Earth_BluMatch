import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./App";
function Login() {
  const navigate = useNavigate();
  const { setHeaderState } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    role: "customer",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    if (isLogin) {
      setLoginData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setSignupData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (isLogin) {
        const result = await axios.post(
          "http://localhost:3000/login/",
          loginData
        );
        console.log(result.data);
        if (result.data.message === true) {
          setHeaderState("type2");
          navigate("/main");
        } else {
          navigate("/login");
        }
      } else {
        const result = await axios.post(
          "http://localhost:3000/signup/",
          signupData
        );
        console.log(result.data);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className={`card ${isLogin ? "" : "flipped"}`} id="card">
        <div className="front">
          <div className="form-container">
            <h2>Login</h2>
            <input
              onChange={changeHandler}
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Username"
              value={loginData.username}
            />
            <input
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              className="form-control"
              id="password"
              name="password"
              value={loginData.password}
            />
            <button type="submit">Login</button>
            <hr />
            <div className="login-front">
              <img
                src="facebook.svg"
                alt="facebook-auth"
                className="facebook-auth"
              />
              <img src="google.svg" alt="google-auth" className="google-auth" />
              <img
                src="linkedin.svg"
                alt="linkedin-auth"
                className="google-auth linkedin-auth"
              />
            </div>
            <div className="toggle-button" onClick={() => setIsLogin(false)}>
              Don't have an account? Sign Up
            </div>
          </div>
        </div>
        <div className="back">
          <div className="form-container">
            <h2>Sign Up</h2>
            <input
              onChange={changeHandler}
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Username"
              value={signupData.username}
            />
            <input
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              className="form-control"
              id="password"
              name="password"
              value={signupData.password}
            />
            <select
              name="role"
              id="role"
              className="form-control"
              title="role"
              onChange={changeHandler}
              value={signupData.role}
            >
              <option value="business">Business</option>
              <option value="customer">Customer</option>
            </select>
            <button type="submit">Sign Up</button>
            <hr />
            <div className="login-front">
              <img
                src="facebook.svg"
                alt="facebook-auth"
                className="facebook-auth"
              />
              <img src="google.svg" alt="google-auth" className="google-auth" />
              <img
                src="linkedin.svg"
                alt="linkedin-auth"
                className="google-auth linkedin-auth"
              />
            </div>
            <div className="toggle-button" onClick={() => setIsLogin(true)}>
              Already have an account? Login
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
