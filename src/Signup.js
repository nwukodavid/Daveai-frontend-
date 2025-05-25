import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log({ email, phone });
    navigate('/');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Email or Phone" onChange={(e) => {
          if (e.target.value.includes('@')) setEmail(e.target.value);
          else setPhone(e.target.value);
        }} />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default Signup;
