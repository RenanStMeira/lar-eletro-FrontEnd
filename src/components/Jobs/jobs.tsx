import Image from '../../assets/ventilado-teto.jpeg';
import Ilumi from '../../assets/ilumi-extern.jpg';
import Padrao from '../../assets/pdrao-entrada.jpg';
import Residence from '../../assets/residencial.jpg';
import Tug from '../../assets/tug.jpeg';

import './jobs.css';

function Service() {
    return (
        <main>
        <div className="container-services">
          <div className='container-services-img'>
            <img src={Image} alt="" width={250}/>
          </div>
          <div>
            <h2>Instalação de ventiladores</h2>
            <p>
              Ventiladores são uma excelente opção para quem quer manter um
              ambiente mais agradável em dias quentes. Realizamos a instalação de
              ventiladores de teto e de parede em residências, comércios e indústrias.
            </p>
          </div>
        </div>
    
        <div className="container-services">
          <div className='container-services-img'>
            <img src={Ilumi} alt="" width={250} />
          </div>
          <div>
            <h2>Instalação de Iluminação Externa</h2>
            <p>
                A iluminação externa ajuda na segurança noturna, facilitando a circulação nas áreas externas, possibilitando o reconhecimento de estranhos e ainda valoriza o paisagismo fachada.
            </p>
          </div>
        </div>
    
        <div className="container-services">
          <div className='container-services-img'>
            <img src={Residence} alt="" width={250}/>
          </div>
          <div>
            <h2>Instalação Residencial</h2>
            <p>
                Realizamos instalações residenciais em novas construçoes, alterações em reformas e modernização em residências antigas.
            </p>
          </div>
        </div>

        <div className="container-services">
          <div className='container-services-img'>
            <img src={Tug} alt="" width={250}/>
          </div>
          <div>
            <h2>Mudanaça tensão de tomadas</h2>
            <p>
                Realizamos alteraçoes em instalações residenciais para modificar a tensão de tomadas de 110V para 220V e vice versa.
            </p>
          </div>
        </div>

        <div className="container-services">
          <div  className='container-services-img'>
            <img src={Padrao} alt="" width={250}/>
          </div>
          <div>
            <h2>Padrão de entrada</h2>
            <p>
                Realizamos projetos de padrão de entrada, manutenção e também cuidamos da documentação junto à concessionária.
            </p>
          </div>
        </div>


      </main>
    );
};

export default Service;