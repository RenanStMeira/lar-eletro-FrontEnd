import Logo from "../../assets/logo.jpg"
import Links from "../Links/links";
import './header.css'

function Header() {
    return(
        
        <header className="container-header">
            <div className="container-logo">
                <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="container-info">
                <h1>Lar Eletro Services</h1>
                <div className="paragrafo">
                    <Links />
                </div>
            </div>
        </header>
    );   
};

export default Header;