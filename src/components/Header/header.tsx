import Logo3 from '../../assets/logo2.jpg';
import Links from "../Links/links";
import './header.css'
import Login from "../Login/login";

function Header() {

    return(
        
        <header className="container-header">
            <div className="container-logo">
                <img src={Logo3} alt="logo" className="logo"/>
            </div>
            <div className="container-info">
                <h1>Lar Eletro Services</h1>
                <div className="paragrafo">
                    <Links />
                    <Login />
                </div>
            </div>
        </header>
    );   
};

export default Header;