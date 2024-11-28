import React from 'react';
import './SignUp.css'
const SignUpForm = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <label htmlFor="email">
          Email:
          <input type="text" id="email" required/>
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" required/>
        </label>
        <button type="submit">Sign Up</button>
        <p>
          Already Registered? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
