import { useState } from "react";
import Logo3 from '../../assets/logo2.jpg';
import Links from "../Links/links";
import Modal from "../Modal/modal";
import './header.css'

function Header() {
  const [openModal, setOpenModal] = useState(false)

    return(
        
        <header className="container-header">
            <div className="container-logo">
                <img src={Logo3} alt="logo" className="logo"/>
            </div>
            <div className="container-info">
                <h1>Lar Eletro Services</h1>
                <div className="paragrafo">
                    <Links />
                    <button className="btn" onClick={() => setOpenModal(true)}>⚡ ORÇAMENTO</button>
                    <Modal isOpen={openModal} setModaOpen={() => setOpenModal(!openModal)}/>
                </div>
            </div>
        </header>
    );   
};

export default Header;