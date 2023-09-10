import { Link } from 'react-router-dom';
import { DivContenainerLinks } from './style';

function Links() {
    return(
        <DivContenainerLinks >
            <Link to="/">HOME</Link>
            <Link to="/services">SERVIÇOS</Link>
            <Link to="/contato">CONTATO</Link>
        </DivContenainerLinks>
    );
};

export default Links;