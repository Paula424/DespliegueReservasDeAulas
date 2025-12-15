import React, { useState } from 'react';
import { login } from '../api';
export default function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const res = await login({ email, password });
      setUser(res.data);
      alert('Login exitoso');
    } catch (err) {
      alert('Credenciales incorrectas');
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}