import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
