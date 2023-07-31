const SignUp = () => {
    const [DisplayName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
   
  
    const SignUp = (e) =>{
      e.preventDefault() ;
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      updateProfile(user , {
        displayName:DisplayName
      });
  
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
      // ..
    });
  
    }
    const Navigate = useNavigate();
    return (
      <div className="SignUp">
        <div className="FirstSection">
          <h1>Sign Up</h1>
           <h3>Already login ? <span className='SignUpSpan' onClick={()=> Navigate("/signIn/SignIn")} >click here</span></h3>
        </div>
        <div className="SecondSection">
          <form className="FormSignUp"  onSubmit={SignUp}>
            <label>User Name </label>
            <br />
            <input
              type="text"
              name="Entre Name"
              id=""
              placeholder="Entre Your Name"
              value={DisplayName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label>Email Id </label>
            <br />
            <input
              type="text"
              name="Entre Email Id"
              id=""
              placeholder="Entre Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label>Password </label>
            <br />
            <input
              type="password"
              name="Entre Password"
              id=""
              placeholder="Entre Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type='submit' className="icon">SignUp</button>
          </form>
        </div>
      </div>
  
    )
  }
  export default SignUp