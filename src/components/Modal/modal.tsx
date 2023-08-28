import './modal.css'

function Modal({isOpen, setModaOpen}: any) {
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    if(isOpen){

        return(
            <section className="container-background">
                <div className='div'>
                    <form action="" className='form' onSubmit={handleSubmit}>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id='nome'/>

                        <label htmlFor="">Email:</label>
                        <input type="email" name="" id="" placeholder='exemplo@exemplo.com'/>

                        <label htmlFor="">Rua:</label>
                        <input type="text" />

                        <label htmlFor="">Bairro:</label>
                        <input type="text" />

                        <label htmlFor="">Numero:</label>
                        <input type="text" />

                        <label htmlFor="">Telefone::</label>
                        <input type="text" name="" id="" />

                        <label htmlFor="">Serviço:</label>
                        <input type="text" />

                        <button>ENVIAR</button>
                        <button onClick={setModaOpen} className='close'>FECHAR</button>
                    </form>
             </div>
        </section>    
            
        );
    };
    return null;
}
    

export default Modal;