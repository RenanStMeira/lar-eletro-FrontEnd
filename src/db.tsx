import img from '../src/assets/ventilado-teto.jpeg';
import Qdc from '../src/assets/qdc.jpg';
import Tug from '../src/assets/tug.jpeg';
import Ent from '../src/assets/pdrao-entrada.jpg';
import Tub from '../src/assets/tubulacao.jpg';
import Ress from '../src/assets/residencial.jpg';
import Ilumi from '../src/assets/ilumi-extern.jpg';

const products  = [
  {
    name: "Instalação de ventiladores",
    imageSrc: img,
    price: "R$ 110,00",
  },
  {
    name: "Instalação e Manutenção de QDC",
    imageSrc: Qdc,
    price: "R$ 190,00",
  },
  {
    name: "Instalação de Tomadas e Interruptores",
    imageSrc: Tug,
    price: "R$ 45,00",
  },
  {
    name: "Instalação Padrão de entrada",
    imageSrc: Ent,
    price: "R$ 480,00",
  },
  {
    name: "Tubulação",
    imageSrc: Tub,
    price: "R$ Consulte",
  },
  {
    name: "Instalação Residencial",
    imageSrc: Ress,
    price: "R$ Consulte",
  },
  {
    name: "Instalação Imluninação",
    imageSrc: Ilumi,
    price: "R$ 55,00",
  },
];

export default products ;