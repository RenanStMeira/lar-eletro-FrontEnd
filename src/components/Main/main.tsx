import products from "../../db"
import { MainContainer, DivProduct, Image } from './style';

function Main() {
    return (
        <MainContainer >
          {products.map((product, index) => (
            <DivProduct key={index} >
              <h3>{product.name}</h3>
              <Image src={product.imageSrc} alt={product.name}/>
              <p className='price'>{product.price}</p>
              <a href="https://encurtador.com.br/dnzU0" target='_blank'>Entre em Contato</a>
            </DivProduct>
          ))}
        </MainContainer>
      );
    }

export default Main;
