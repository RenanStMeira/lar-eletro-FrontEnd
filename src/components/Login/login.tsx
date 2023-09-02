import React, { useState } from "react";
import axios from 'axios';
import './login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3333/login',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      // Se a resposta for bem-sucedida, você pode lidar com a autenticação aqui
      console.log(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setError('Usuário ou senha inválidos');
        } else {
          setError('Erro ao acessar o servidor');
        }
      }
    }
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className='login-form-wrap'>
      {!showLoginForm && (
        <button onClick={toggleLoginForm} className="btn-login-enter">ENTRAR</button>
      )}
      {showLoginForm && (
        <form className='login-form' onSubmit={handleLogin}>
          <input
            className="input-login"
            type='email'
            name='email'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-login2"
            type='password'
            name='password'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='btn-login'>Login</button>
        </form>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
