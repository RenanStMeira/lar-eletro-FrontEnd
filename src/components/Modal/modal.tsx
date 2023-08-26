import './modal.css'

function Modal({isOpen, setModaOpen}: any) {

    if(isOpen){

        return(
            <section className="container-background">
                <div className='div'>
                    <form action="" className='form'>
                        <label htmlFor="">Nome:</label>
                        <input type="text" />

                        <label htmlFor="">Email:</label>
                        <input type="email" name="" id="" placeholder='exemplo@exemplo.com'/>

                        <label htmlFor="">Rua:</label>
                        <input type="text" />

                        <label htmlFor="">Bairro:</label>
                        <input type="text" />

                        <label htmlFor="">Numero:</label>
                        <input type="text" />

                        <label htmlFor="">Senha:</label>
                        <input type="password" name="" id="" />
                        <button>Enviar</button>
                        <button onClick={setModaOpen} className='close'>Fechar</button>
                    </form>
             </div>
        </section>
               
            
        );
    };
    return null;
}
    

export default Modal;