const SignIn = () => {
  const [email ,setEmail] = useState("")
  const [password , setPassword] = useState("")

  const Navigate = useNavigate();

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password,)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.displayName)
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
  }

  return (
    <div className="SignIn">
      <div className="FirstSection">
        <h1>Login Page</h1>
        <h2>For New User</h2>
        <button className="FSBtn" onClick={() => Navigate("/signIn/SignUp")}>SignUp</button>
      </div>
      <div className="SecondSection">
        <form className="FormSignin"  onSubmit={SignIn}>
          <label>User Email</label>
          <br />
          <input
            type="email"
            name="Entre Email"
            id=""
            placeholder="Entre Your Email"
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
          <button type="submit" className="icon">SignIn</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;