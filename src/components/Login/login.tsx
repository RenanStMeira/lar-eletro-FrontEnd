import React, { useState } from "react";
import './Login.css';
import { login } from '../../Service/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(email, password);

      // Suponha que a resposta contém o token de autenticação
      localStorage.setItem('token', response.data.token);

      // Armazena o email do usuário
      localStorage.setItem('emailUsuario', email);

      // Redirecionar para a página de serviços ou apropriada
      window.location.href = '/services';
    } catch (err) {
      setError('Usuário ou senha inválidos');
    }
  };

  const handleLogout = () => {
    // Limpe os dados de autenticação, por exemplo, remova o token
    localStorage.removeItem('token');

    // Limpe o email do usuário
    localStorage.removeItem('emailUsuario');

    // Redirecione o usuário para a página de login
    window.location.href = "/";
  };

  return (
    <div>
      {localStorage.getItem('token') ? (
        <button onClick={handleLogout}>SAIR</button>
      ) : (
        <button onClick={openModal}>ENTRAR</button>
      )}

      {showModal && (
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
            <button onClick={closeModal} className="close">FECHAR</button>
            {error && <p className="erro">{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
