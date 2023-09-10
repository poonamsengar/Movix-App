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
  const [registration, setRegistraion] = useState("")
  const [message , setMassage] = useState(false)
  const [Confimmessage , ConfimsetMassage] = useState(false)

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    ConfimPassword: "",
  });

  const FormhandelSubmit = (e) => {
    e.preventDefault()
    const reg = /^[0-9A-Za-z]{3,16}$/

    if (!input.name) {
      toast.error('Fill the details ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else if (!reg.test(input.name)) {
      toast.error('please insert valid username ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else if (typeof input.email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(input.email)) {
        toast.warn('Please enter valid email address.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }

    if (input.password )  {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;

      const uppercasePassword = uppercaseRegExp.test(input.password)
      const lowercasePassword = lowercaseRegExp.test(input.password)
      const digitsPassword = digitsRegExp.test(input.password );
      const specialCharPassword = specialCharRegExp.test(input.password );
      const minLengthPassword = minLengthRegExp.test(input.password );

        if (!input.password) {
          setMassage("Password is empty")
        } else if (!uppercasePassword) {
          setMassage("At least one Uppercase")
        } else if (!lowercasePassword) {
          setMassage("At least one Lowercase")
        } else if (!digitsPassword) {
          setMassage("At least one digit")
        } else if (!specialCharPassword) {
          setMassage("At least one Special Characters")
        } else if (!minLengthPassword) {
          setMassage("At least minumum 8 characters")
        }else{
          setMassage("only password successfull");
          localStorage.setItem("user", JSON.stringify(input));
        }
    }
    if (input.ConfimPassword )  {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;

      const uppercasePassword = uppercaseRegExp.test(input.ConfimPassword)
      const lowercasePassword = lowercaseRegExp.test(input.ConfimPassword)
      const digitsPassword = digitsRegExp.test(input.ConfimPassword );
      const specialCharPassword = specialCharRegExp.test(input.ConfimPassword );
      const minLengthPassword = minLengthRegExp.test(input.ConfimPassword );

        if (!input.ConfimPassword) {
          ConfimsetMassage("Password is empty")
        } else if (!uppercasePassword) {
          ConfimsetMassage("At least one Uppercase")
        } else if (!lowercasePassword) {
          ConfimsetMassage("At least one Lowercase")
        } else if (!digitsPassword) {
          ConfimsetMassage("At least one digit")
        } else if (!specialCharPassword) {
          ConfimsetMassage("At least one Special Characters")
        } else if (!minLengthPassword) {
          ConfimsetMassage("At least minumum 8 characters")
        }else{
          ConfimsetMassage("only password successfull");
          localStorage.setItem("user", JSON.stringify(input));
          navigate('/signIn')
          swal("Good job!", "Congratulation you registered", "success");

        }
    }


    // else{
    //   alert("succeesssfull")
    //    swal("Good job!", "Congratulation you registered", "success");
    //    localStorage.setItem("user", JSON.stringify(input));
    //  }
   
    // else{
    //   if(input.password === input.ConfimPassword){
    //     alert("succeesssfull")
    //   swal("Good job!", "Congratulation you registered", "success");
    //   localStorage.setItem("user", JSON.stringify(input));
   
    //   }

    // }

  }
  return (
    <>
      <form onSubmit={FormhandelSubmit} className="form-Register">
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
          {/* <p style={{ marginLeft: "2rem", color: "red" }}>{message}</p> */}
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
          <p style={{ marginLeft: "2rem", color: "red" }}>{Confimmessage}</p>
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
