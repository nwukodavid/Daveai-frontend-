import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Login</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/forgot-password">Forgot Password</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
