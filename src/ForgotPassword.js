import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div>
      <h1>Forgot Password</h1>
      <input type="text" placeholder="Phone or Email" /><br />
      <button>Reset Password</button><br /><br />
      <Link to="/">Login</Link>
    </div>
  );
}

export default ForgotPassword;
