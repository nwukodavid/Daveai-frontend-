import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Phone or Email" /><br />
      <input type="password" placeholder="Password" /><br />
      <button>Login</button><br /><br />
      <Link to="/">Login</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/forgot-password">Forgot Password</Link>
    </div>
  );
}

export default Login;
