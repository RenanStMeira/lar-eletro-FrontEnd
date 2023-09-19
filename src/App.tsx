import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Services from './pages/Services';
import Contact from './pages/Contact';
import ListUsers from './pages/ListUsers';

function App() {

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/services" element={ <Services /> } />
                <Route path="/contato" element={ <Contact /> } />
                <Route path="list" element={ <ListUsers /> } />
            </Routes>
        </div>
    );
};

export default App;