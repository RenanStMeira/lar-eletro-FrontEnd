import { useEffect, useState } from 'react';
import Logo3 from '../../assets/logo2.jpg';
import Links from "../Links/links";
import Login from "../Login/login";
import Modal from '../Create/create';
import { HeaderNav, Logo, ContentDiv, ContantDivLinks, ButtonHeader, NavBtn } from './style';


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
      <HeaderNav >
        <Logo src= {Logo3}/>
        <ContentDiv>
          <h1>Lar Eletro Services</h1>
        </ContentDiv>
        <ContantDivLinks>
          {emailUsuario ? (
            <p>{emailUsuario}!</p>
          ) : (
            <p></p>
          )}
          <Links />
        </ContantDivLinks>
        <NavBtn className='modal-section'>
          <Login />
          <ButtonHeader onClick={() => setOpenModal(true)} className='btn'>CADASTRO</ButtonHeader>
          <Modal isOpen={openModal} setModalOpen={() => setOpenModal(false)} />
        </NavBtn>
      </HeaderNav>
    );
  }
  
  export default Header;
  
  
  
  
  
  