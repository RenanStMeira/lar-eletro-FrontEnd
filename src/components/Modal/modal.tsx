import React, { useState } from "react";
import axios from "axios";
import './modal.css';

function Modal({ isOpen, setModalOpen }: any) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");
  const [password, setSenha] = useState("");
//   const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3333/create", {
        name: nome,
        email: email,
        contato: contato,
        password: password,
      });

      // Lide com a resposta da API aqui
      console.log("Resposta da API:", response.data);

      // Verifique o status da resposta da API
      if (response.status === 200) {
        // Limpe os campos do formulário após o envio bem-sucedido
        setNome("");
        setEmail("");
        setContato("");
        setSenha("");
        // setError(""); // Limpe qualquer erro anterior
        setModalOpen(false); // Feche o modal após o envio bem-sucedido
      } else {
        // setError("Erro ao enviar para a API. Status: " + response.status);
      }
    } catch (err) {
      console.error("Erro ao enviar para a API:", err);
    //   setError("Erro ao enviar para a API. Verifique sua conexão ou tente novamente mais tarde.");
    }
  }

  if (!isOpen) {
    return null; // Se isOpen for falso, não renderize o modal
  }

  return (
    <section className="container-background">
      <div className='div'>
        <form action="" className='form' onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id='nome' value={nome} onChange={(e) => setNome(e.target.value)} />

          <label htmlFor="email">Email:</label>
          <input type="email" id='email' placeholder='exemplo@exemplo.com' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="contato">Contato:</label>
          <input type="text" id='contato' value={contato} onChange={(e) => setContato(e.target.value)} />

          <label htmlFor="senha">Senha:</label>
          <input type='password' id='senha' value={password} onChange={(e) => setSenha(e.target.value)} />

          <button>ENVIAR</button>
          <button onClick={() => setModalOpen(false)} className='close'>FECHAR</button>
        </form>
      </div>
    </section>
  );
}

export default Modal;
