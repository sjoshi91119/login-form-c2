export const Login = () => {
  return (
    <div className="form-container">
      <div className="login-form">
        <h3>Welcome back! 👋</h3>
        <h1>Sign in to your account</h1>

        <label htmlFor="emailInput">Your email</label>
        <input type="email" id="emailInput"></input>

        <label htmlFor="passwordInput">Password</label>
        <input type="password" id="passwordInput"></input>

        <button type="submit">CONTINUE</button>

        <a href="#">Forget your password?</a>
      </div>

      <p id="signup-redirect">
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
};
