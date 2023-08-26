import { useState } from "react";
import Logo from "../../assets/logo.jpg"
import Links from "../Links/links";
import Modal from "../Modal/modal";
import './header.css'

function Header() {
  const [openModal, setOpenModal] = useState(false)

    return(
        
        <header className="container-header">
            <div className="container-logo">
                <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="container-info">
                <h1>Lar Eletro Services</h1>
                <div className="paragrafo">
                    <Links />
                    <button className="btn" onClick={() => setOpenModal(true)}>cadastrar</button>
                    <Modal isOpen={openModal} setModaOpen={() => setOpenModal(!openModal)}/>
                </div>
            </div>
        </header>
    );   
};

export default Header;