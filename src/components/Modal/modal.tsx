import React, { useState } from "react";
import axios from 'axios';
import './modal.css';

function Modal({ isOpen, setModalOpen }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contato, setContato] = useState('');

  // const [error, setError] = useState<string | null>(null);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3333/create',
        { name, email, password, contato },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      localStorage.setItem('token', response.data.token);
      window.location.href = '/services';
    } catch (err) {
      // setError('Usuário ou senha inválidos');
    }
  };

  return (
    <>
      {isOpen && (
        <section className="container-background">
          <div className='div'>
            <form action="" className='form' onSubmit={handleCreate}>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id='nome' value={name} onChange={(e) => setName(e.target.value)} />

              <label htmlFor="email">Email:</label>
              <input type="email" id='email' placeholder='exemplo@exemplo.com' value={email}
                onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="contato">Contato:</label>
              <input type="text" id='contato' value={contato} onChange={(e) => setContato(e.target.value)} />

              <label htmlFor="senha">Senha:</label>
              <input type='password' id='senha' value={password}
                onChange={(e) => setPassword(e.target.value)} />

              <button>ENVIAR</button>
              <button onClick={() => setModalOpen(false)} className='close'>FECHAR</button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default Modal;
