import React, { useState } from "react";
import axios from 'axios';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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

      localStorage.setItem('token', response.data.token);
      window.location.href = '/services';
    } catch (err) {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <div>
      <button onClick={openModal}>ENTRAR</button> {/* Botão para abrir o modal */}
      {showModal && ( // Renderize o modal se showModal for verdadeiro
        <div className="modal">
          <form className="form-login" onSubmit={handleLogin}>
            <input
              className="input-email"
              type='email'
              name='email'
              placeholder='Email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-password"
              type='password'
              name='password'
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' className="button">LOGIN</button>
            <button onClick={closeModal} className="close">CANCELAR</button> {/* Botão para fechar o modal */}
          </form>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
