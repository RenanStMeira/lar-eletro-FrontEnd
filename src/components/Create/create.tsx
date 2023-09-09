import React, { useState } from 'react';
import './create.css';
import { createUser } from '../../Service/api';

interface ICreateProps {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
}

function Create({ isOpen, setModalOpen }: ICreateProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contato, setContato] = useState('');

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await createUser(name, email, password, contato);
      localStorage.setItem('token', response.token);
      window.location.href = '/services';
    } catch (err) {
      // Trate o erro conforme necessário
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

export default Create;
