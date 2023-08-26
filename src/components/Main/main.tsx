import img from '../../assets/ventilado-teto.jpeg';
import Button from '../Button/button';
import './main.css';

function Main() {
    return(
        
        <main>
            <div className="container">
                <div className="product">
                    <h3>Instalação de ventiladores</h3>
                    <img src={img} alt="" width={250} />
                    <p>R$ 110,00</p>
                    <Button />
                </div>
                <div className="product">
                    <h3>Instalação e Manutenção de QDC</h3>
                    <img src={img} alt="" width={250} />
                    <p>R$ 190,00</p>
                    <Button />
                </div>
                <div className="product">
                    <h3>Instalação de Tomadas e Interruptores</h3>
                    <img src={img} alt="" width={250} />
                    <p>R$ 45,00</p>
                    <Button />
                </div>
                <div className="product">
                    <h3>Instalação Padrão de entrada</h3>
                    <img src={img} alt="" width={250} />
                    <p>R$ 480,00</p>
                    <Button />
                </div>
                <div className="product">
                    <h3>Tubulação</h3>
                    <img src={img} alt="" width={250} />
                    <p>R$ Consulte</p>
                    <Button />
                </div>
                <div className="product">
                    <h3>Instalação Residencial</h3>
                    <img src={img} alt="" width={250} />
                    <p>R$ Consulte</p>
                    <Button />
                </div>
            </div>
        </main>

    );
};

export default Main;