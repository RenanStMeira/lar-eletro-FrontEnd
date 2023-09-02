import img from '../../assets/ventilado-teto.jpeg';
import Qdc from '../../assets/qdc.jpg';
import Tug from '../../assets/tug.jpeg';
import Ent from '../../assets/pdrao-entrada.jpg';
import Tub from '../../assets/tubulacao.jpg';
import Ress from '../../assets/residencial.jpg';
import Modal from "../Modal/modal";
import './main.css';
import { useState } from 'react';

function Main() {
  const [openModal, setOpenModal] = useState(false)


    return(
        
        <main>
            <button className="btn" onClick={() => setOpenModal(true)}>⚡ ORÇAMENTO</button>
            <Modal isOpen={openModal} setModaOpen={() => setOpenModal(!openModal)} />
                    

            <div className="container">
                <div className="product">
                    <h3>Instalação de ventiladores</h3>
                    <img src={img} alt="" />
                    <p>R$ 110,00</p>
                    <a href="https://web.whatsapp.com/">CONTATO</a>
                    {/* <Button onClick={handleClick}>ORÇAMENTO</Button> */}
                </div>
                <div className="product">
                    <h3>Instalação e Manutenção de QDC</h3>
                    <img src={Qdc} alt="" />
                    <p>R$ 190,00</p>
                    <a href="https://web.whatsapp.com/">CONTATO</a>
                    {/* <Button onClick={handleClick}>ORÇAMENTO</Button> */}
                </div>
                <div className="product">
                    <h3>Instalação de Tomadas e Interruptores</h3>
                    <img src={Tug} alt="" />
                    <p>R$ 45,00</p>
                    <a href="https://web.whatsapp.com/">CONTATO</a>
                    {/* <Button onClick={handleClick}>ORÇAMENTO</Button> */}
                </div>
                <div className="product">
                    <h3>Instalação Padrão de entrada</h3>
                    <img src={Ent} alt="" />
                    <p>R$ 480,00</p>
                    <a href="https://web.whatsapp.com/">CONTATO</a>
                    {/* <Button onClick={handleClick}>ORÇAMENTO</Button>  */}
                </div>
                <div className="product">
                    <h3>Tubulação</h3>
                    <img src={Tub} alt="" />
                    <p>R$ Consulte</p>
                    <a href="https://web.whatsapp.com/">CONTATO</a>
                    {/* <Button onClick={handleClick}>ORÇAMENTO</Button> */}
                </div>
                <div className="product">
                    <h3>Instalação Residencial</h3>
                    <img src={Ress} alt="" />
                    <p>R$ Consulte</p>
                    <a href="https://web.whatsapp.com/">CONTATO</a>
                    {/* <Button onClick={handleClick}>ORÇAMENTO</Button> */}
                </div>
            </div>
        </main>

    );
};

export default Main;