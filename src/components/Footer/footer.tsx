import './footer.css';

function Footer() {
    return(
        <section className="container-section">
            <div className="message">
                <h3>Deixe Sua Mensagem</h3>
                <textarea name="" id="" cols={37} rows={10}></textarea>
            </div>
            <div className="footer">
               <p>Lar Eletro Service &copy;</p> 
            </div>
        </section>
        
    );
};

export default Footer;