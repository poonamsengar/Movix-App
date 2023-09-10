import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { FaRegUser, FaRegEye, FaUserNinja, FaRedRiver } from "react-icons/fa";
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const navigate = useNavigate();
  const [visible, setvisivle] = useState(false)
  const [Confimvisible, setConfimVisivle] = useState(false)


  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    ConfimPassword: "",
  });


  const FormhandelSubmit = (e) => {
    e.preventDefault();
    const passwordInputValue = e.target.value.trim();
    const passwordInputFieldName = e.target.name;
    const NewPasswordInput = { ...input, [passwordInputFieldName]: passwordInputValue }

    setInput(NewPasswordInput);

    // const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (passwordInputFieldName === 'password') {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
     
      let errMsg = "";

      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPasswordErr(errMsg);
    }

    if(passwordInputFieldName === "confirmPassword" || (passwordInputFieldName==="password" && passwordInput.confirmPassword.length>0) ){
            
      if(input.ConfimPassword!== input.password)
      {
      setConfirmPasswordError("Confirm password is not matched");
      }else{
      setConfirmPasswordError("");
      }
      
  }
}

    // if (input.password === "" ) {
    //   toast.error('Fill the details ', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     });
    // }
    // else if (regExp.test(input.password) || regExp.test(input.ConfimPassword) || input.ConfimPassword == input.password) {
    //   toast.warn('Please  match Password ', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     });

    // }
    // else if ((input.email === "") || (input.password === "")) {
    //   toast.warn('to fill all mendtory info ', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     });
    // }
    // else{
    //   // setmessage("password is  valid");
    //   navigate("/SignIn");
    //   swal("Good job!", "Congratulation you registered", "success");
    //   localStorage.setItem("user",JSON.stringify(input));

    // }


  // };

  return (
    <>
      <form onSubmit={FormhandelSubmit} className="form-Register">
        <div className="insideForm">
          <h1>SignUp</h1>
          <label>user name</label> <br />
          <input
            className="insideInput"
            autoComplete="off"
            type="name"
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
          <br />
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
          <label>Enter Password</label>
          <br />
          <input
            className="insideInput"
            autoComplete="off"
            type={visible ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <span className="iconn" onClick={() => setvisivle(!visible)}>
            {visible ? <FaRegEye /> : <FaRedRiver />}
          </span>
          <p style={{ marginLeft: "2rem", color: "red" }}>{message}</p>
          <br />
          <label>Confim password</label>
          <input
            className="insideInput"
            autoComplete="off"
            type={Confimvisible ? "text" : "password"}
            placeholder="Confim password"
            name="ConfimPassword"
            value={input.ConfimPassword}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <span className="iconn" onClick={() => setConfimVisivle(!Confimvisible)}>
            {Confimvisible ? <FaRegEye /> : <FaRedRiver />}
          </span>
          <p style={{ marginLeft: "2rem", color: "red" }}>{message}</p>
          <br />
          <button type="submit" className="btn-Submit">Register</button>
        </div>
      </form>
      <ToastContainer />

      {/* <Toast/> */}
    </>
  );
};

export default Register;
