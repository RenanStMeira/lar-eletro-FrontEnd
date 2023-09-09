import { useEffect, useState } from 'react';
import Logo3 from '../../assets/logo2.jpg';
import Links from "../Links/links";
import Login from "../Login/login";
import Modal from '../Create/create';
import './header.css';


function Header() {
    const [openModal, setOpenModal] = useState(false);
    const [emailUsuario, setEmailUsuario] = useState('');
  
    useEffect(() => {
      // Obter o email do usuário do localStorage
      const storedEmailUsuario = localStorage.getItem('emailUsuario');
  
      if (storedEmailUsuario) {
        setEmailUsuario(storedEmailUsuario);
        
      }
    }, []);
  
    return (
      <header className="container-header">
        <div className="container-logo">
          <img src={Logo3} width={100} alt="logo" className="logo" />
        </div>
        <div className="container-info">
          <h1>Lar Eletro Services</h1>
        </div>
        <div className="container-link">
          {emailUsuario ? (
            <p className='paragraph-login'>{emailUsuario}!</p>
          ) : (
            <p></p>
          )}
          <Links />
        </div>
        <div className='modal-section'>
          <Login />
          <button onClick={() => setOpenModal(true)} className='btn'>CADASTRO</button>
          <Modal isOpen={openModal} setModalOpen={() => setOpenModal(false)} />
        </div>
      </header>
    );
  }
  
  export default Header;
  
  
  
  
  
  