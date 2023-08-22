import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { FaRegUser, FaRegEye, FaUserNinja } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  
  const handelSubmit = (e) => {
    e.preventDefault();

    if(
      input.email == "" && input.password == ""){
      alert("please filled the mendotory information");
    }else{
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/")
    }
  };
  return (
    <form onSubmit={handelSubmit} className="form-Register">
      <div className="insideForm">
      <h1>SignUp</h1>
      
        <label>user name</label> <br />
        <input
          className="insideInput"
          autoComplete="off"
          type="text"
          placeholder="enter name"
          name="name"
          value={input.name}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
           <span className="iconn">
          <FaRegUser />
        </span>
        <br/>
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
          <FaUserNinja />
        </span>
        <br />
        <label>user password</label>
        <br />
        <input
          className="insideInput"
          autoComplete="off"
          type="password"
          placeholder="enter password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setInput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <span className="iconn">
          <FaRegEye />
        </span>
        <br />
        <button type="submit" className="btn-Submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
