import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (data.success) {
      alert('Password reset link sent!');
    } else {
      alert(data.message || 'Failed to send reset link.');
    }
  };

  return (
    <form onSubmit={handleReset}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Send Reset Link</button>
    </form>
  );
}

export default ForgotPassword;
