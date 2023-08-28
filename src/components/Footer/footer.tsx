import './footer.css';
import Logo2 from '../../assets/logo2.jpg'

function Footer() {
    return(
        <section className="container-section">
           
            <div className="footer">
                <img src={Logo2} alt="" width={50}/>
               <p>Lar Eletro Service &copy;</p> 
            </div>
        </section>
        
    );
};

export default Footer;