import './box.css';

function Box() {
    return(
        
        <section>
            <div className='container-text'>
                <h4>Precisa de uma visita, nós entramos em contato com você</h4>
            </div>
            <div className='section-content'>
                <div className='contact-jobs'>
                <input type="text" placeholder='Seu Nome'/>
                <input type="email" name="" id="" placeholder='E-mail'/>
                <input type="text" placeholder='Telefone Para Contato'/>
                <input type="date" name="" id="" />
            </div>
            </div>
             <div className="message">
                <h3>Deixe Sua Mensagem</h3>
                <form action="">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="exemplo@email.com"/>
                    <textarea name="" id="" cols={37} rows={10}></textarea>
                    <button>Enviar</button>
                </form>                
            </div>
        </section>
    );
};

export default Box;