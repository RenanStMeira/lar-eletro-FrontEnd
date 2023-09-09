import './main.css';

import products from "../../db"

function Main() {
    return (
        <div className='container'>
          {products.map((product, index) => (
            <div key={index} className='product'>
              <h3 className='description_text'>{product.name}</h3>
              <img src={product.imageSrc} alt={product.name} />
              <p className='price'>{product.price}</p>
              <a href="https://encurtador.com.br/dnzU0" target='_blank'>Entre em Contato</a>
            </div>
          ))}
        </div>
      );
    }

export default Main;
