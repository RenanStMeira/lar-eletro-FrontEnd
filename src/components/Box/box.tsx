import React, { useState } from 'react';
import './box.css';
import { sendContactMessage } from '../../Service/api';

function Box() {
  const [name, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await sendContactMessage(name, email, contato, mensagem);

      // Lide com a resposta da API aqui
      console.log("Resposta da API:", response);

      // Verifique o status da resposta da API
      if (response) {
        // Limpe os campos do formulário após o envio bem-sucedido
        setNome('');
        setEmail('');
        setContato('');
        setMensagem('');
        setError(''); // Limpe qualquer erro anterior

        // Defina a mensagem de sucesso após o envio bem-sucedido
        setSuccessMessage('Mensagem enviada com sucesso');
      } else {
        setError('Erro ao enviar para a API. Tente novamente mais tarde.');
      }
    } catch (err) {
      // Lide com erros da API aqui
      console.error("Erro ao enviar para a API:", err);
      setError('Não foi possível enviar sua mensagem.');
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
          <input type="text" placeholder='Contato Para Contato' value={contato} onChange={(e) => setContato(e.target.value)} />
        </div>
      </div>
      <div className="message">
        <h3>Deixe sua mensagem</h3>
        <textarea name="mensagem" id="mensagem" cols={37} rows={10} value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
        <button className='btn-send' onClick={handleSubmit}>Enviar</button>

        {error && <p className="erro">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
      </div>
    </section>
  );
}

export default Box;
