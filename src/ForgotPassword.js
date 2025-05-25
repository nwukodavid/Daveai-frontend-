import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // Handle password reset logic
    console.log('Reset link sent to:', email);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}
export default ForgotPassword;
