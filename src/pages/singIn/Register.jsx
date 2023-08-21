import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.scss"

const Register = () => {
    const navigate = useNavigate();
      const [input, setInput] = useState({
        email: "",
        password: "",
      });
     
      const handelSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
         navigate("/");
      };
      return (
        <form onSubmit={handelSubmit} className="form-Register">
          <label>user email</label> <br />
          <input
            type="email"
            placeholder="enter email"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <br />
          <label>user password</label>
          <br />
          <input
            type="password"
            placeholder="enter password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <br />
          <button type='submit'>SignUp</button>
        </form>
      );
    }

export default Register;