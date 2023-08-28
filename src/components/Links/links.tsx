import './links.css';
import { Link } from 'react-router-dom';

function Links() {
    return(
        <div className="container-links">
            <Link to="/">HOME</Link>
            <Link to="/services">SERVIÇOS</Link>
            <Link to="/contato">CONTATO</Link>
        </div>
    );
};

export default Links;