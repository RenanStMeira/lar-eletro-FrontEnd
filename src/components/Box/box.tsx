import React, { useState } from "react";
import axios from 'axios';
import './box.css';

function Box() {
  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
//   const [data, setData] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3333/contact', {
        name,
        email,
        contato,
        // data,
        mensagem
      });

      // Lide com a resposta da API aqui
      console.log("Resposta da API:", response.data);

      // Verifique o status da resposta da API
      if (response.status === 200) {
        // Limpe os campos do formulário após o envio bem-sucedido
        setNome('');
        setEmail('');
        setContato('');
        // setData('');
        setMensagem('');
        setError(''); // Limpe qualquer erro anterior
      } else {
        setError('Erro ao enviar para a API. Tente novamente mais tarde.');
      }
    } catch (err) {
      // Lide com erros da API aqui
      console.error("Erro ao enviar para a API:", err);
      setError('Erro ao enviar para a API. Verifique sua conexão ou tente novamente mais tarde.');
    }
  };

  return (
    <section className="section-contact">
      <div className='container-text'>
        <h4>Precisa de uma visita, nós entramos em contato com você</h4>
      </div>
      <div className='section-content'>
        <div className='contact-jobs'>
          <input type="text" placeholder='Seu Nome' value={name} onChange={(e) => setNome(e.target.value)} />
          <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='contato Para Contato' value={contato} onChange={(e) => setContato(e.target.value)} />
          {/* <input type="date" value={data} onChange={(e) => setData(e.target.value)} /> */}
        </div>
      </div>
      <div className="message">
              <h3>Deixe sua mensagem</h3>
          <textarea name="mensagem" id="mensagem" cols={37} rows={10} value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
          <button className='btn-send' onClick={handleSubmit}>Enviar</button>
      </div>
      {error && <p>{error}</p>}
    </section>
  );
}

export default Box;
