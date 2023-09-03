import { useState } from 'react';
import Logo3 from '../../assets/logo2.jpg';
import Links from "../Links/links";
import Login from "../Login/login";
import Modal from '../Modal/modal';
import './header.css'

function Header() {
    const [openModal, setOpenModal] = useState(false);

    return(
        
        <header className="container-header">
            <div className="container-logo">
                <img src={Logo3} alt="logo" className="logo"/>
            </div>
            <div className="container-info">
                <h1>Lar Eletro Services</h1>
            </div>    
                <div className="conatiner-link">
                    <Links />
                </div>    
                <div className='modal-section'>
                    <Login />
                    <button onClick={() => setOpenModal(true)} className='btn'>CADASTRO</button>
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(false)} /> {/* Aqui está o modal */}
                </div>
        </header>
    );   
};

export default Header;