import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Phone or Email" /><br />
      <input type="password" placeholder="Password" /><br />
      <button>Sign Up</button><br /><br />
      <Link to="/">Login</Link>
    </div>
  );
}

export default Signup;
