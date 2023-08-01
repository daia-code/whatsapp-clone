import React, { useState } from 'react';
import './Login.css';
import { Button } from '@mui/material';
function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simulate login logic (you should replace this with actual authentication)
    if (username === '' && password === '') {
      // Set the user state to indicate successful login
      setUser({ username });
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login">
    <div className="login__container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png"
        alt="whatsapp"
      />
      <div className="login__text">
        <h1>Sign in to Whatsapp</h1>
      </div>
      <Button onClick={handleLogin}>Sign In with Google</Button>
    </div>
  </div>
  );
}

export default Login;
