import React from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const Register = () => {
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(email, password, username);
    const { data } = await axios.post(` ${baseURL}/register`, {
      email,
      username,
      password,
    });
    console.log(data);

    if (data.success) {
      // Take route to login
      //page if done  is done successfully
      redirect("/login");
    } else {
      console.log(data);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleRegister}>
        <section className="Log-me-abeg d-flex ">
          <div className="login-input text-center pt-4 mt-5">
            <Link to="/" className="d-flex justify-content-end me-5">
              <RxCross1 className="cross" />
            </Link>
            <div className="join">
              <b className="fs-2">
                Join Post<span className="text-primary">it</span>.
              </b>
            </div>
            <div className="mt-1">
              <p className="fs-5">
                Enter your email address to create an account on Post
                <span className="text-primary">it</span>..
              </p>
            </div>
            <div className="liner1 mt-2">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder=" Username "
                className="mt-3"
              />
              <br />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Your Email Address"
                className="mt-4"
              />
              <br />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="mt-3"
              />
            </div>
            <button type="submit" className="mt-3">
              Continue
            </button>
            <div className="d-flex justify-content-center mt-3">
              <p className="fs-5 ">Already have an account?!</p>
              <Link to="/login" className="text-decoration-none">
                Sign In
              </Link>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Register;
