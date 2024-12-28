// src/components/AuthLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Basic validation and token storage for login
    if (email === 'test@example.com' && password === 'password123') {
      // Simulate storing a token in local storage upon successful login
      localStorage.setItem('authToken', 'dummy_token_1234');
      
      // Redirect to task manager
      navigate('/tasks'); 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f6f9',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          marginBottom: '20px',
          color: '#333',
          textAlign: 'center',
        }}
      >
        Login
      </h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={{
          width: '280px',
          padding: '10px',
          margin: '10px 0',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '14px',
          boxSizing: 'border-box',
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{
          width: '280px',
          padding: '10px',
          margin: '10px 0',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '14px',
          boxSizing: 'border-box',
        }}
      />
      <button
        onClick={handleLogin}
        style={{
          width: '300px',
          padding: '12px',
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        Login
      </button>
    </div>
  );
};

export default AuthLogin;
