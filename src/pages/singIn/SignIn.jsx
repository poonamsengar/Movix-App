import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.scss";
import {
  FaRegUser,
  FaRegEye,
} from "react-icons/fa";

const SignIn = () => {

  const [input, setInput] = useState({
    name:"",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handelLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Email and Password incorrect");
    }
  };

  return (
    <form onSubmit={handelLogin} className="form-Register">
      <div className="insideForm">
      <h1>SignIn</h1>
      <label>user email</label> <br />
        <input
          className="insideInput"
          autoComplete="off"
          type="email"
          placeholder="enter email"
          name="email"
          value={input.email}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
         <span className="iconn">
            <FaRegUser />
          </span>
        <br />
        <label>user password</label>
        <br />
        <input
          className="insideInput"
          type="password"
          placeholder="enter password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
           <span className="iconn" >
            <FaRegEye />
          </span>
        <br />
        <button type="submit" className="btn-Submit">
          Login
        </button>
        <Link to="/Register" className="reg">
          <u >Register</u>
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
