import img from '../../assets/ventilado-teto.jpeg';
import Button from '../Button/button';
import Qdc from '../../assets/qdc.jpg';
import Tug from '../../assets/tug.jpeg';
import Ent from '../../assets/pdrao-entrada.jpg';
import Tub from '../../assets/tubulacao.jpg';
import Ress from '../../assets/residencial.jpg';
import './main.css';

function Main() {
    function handleClick() {
        alert('clicado')
    }

    return(
        
        <main>
            <div className="container">
                <div className="product">
                    <h3>Instalação de ventiladores</h3>
                    <img src={img} alt="" />
                    <p>R$ 110,00</p>
                    <Button onClick={handleClick}>ORÇAMENTO</Button>
                </div>
                <div className="product">
                    <h3>Instalação e Manutenção de QDC</h3>
                    <img src={Qdc} alt="" />
                    <p>R$ 190,00</p>
                    <Button onClick={handleClick}>ORÇAMENTO</Button>
                </div>
                <div className="product">
                    <h3>Instalação de Tomadas e Interruptores</h3>
                    <img src={Tug} alt="" />
                    <p>R$ 45,00</p>
                    <Button onClick={handleClick}>ORÇAMENTO</Button>
                </div>
                <div className="product">
                    <h3>Instalação Padrão de entrada</h3>
                    <img src={Ent} alt="" />
                    <p>R$ 480,00</p>
                    <Button onClick={handleClick}>ORÇAMENTO</Button> 
                </div>
                <div className="product">
                    <h3>Tubulação</h3>
                    <img src={Tub} alt="" />
                    <p>R$ Consulte</p>
                    <Button onClick={handleClick}>ORÇAMENTO</Button>
                </div>
                <div className="product">
                    <h3>Instalação Residencial</h3>
                    <img src={Ress} alt="" />
                    <p>R$ Consulte</p>
                    <Button onClick={handleClick}>ORÇAMENTO</Button>
                </div>
            </div>
        </main>

    );
};

export default Main;