import Logo2 from '../../assets/logo2.jpg';
import { DivFooter } from './style';

function Footer() {
    return(
            <DivFooter >
                <img src={Logo2} alt="" width={50}/>
               <p>Lar Eletro Service &copy;</p> 
            </DivFooter> 
    );
};

export default Footer;