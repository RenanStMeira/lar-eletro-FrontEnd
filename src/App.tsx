import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Services from './pages/Services';
import Contact from './pages/Contact';
// import LoginUser from './pages/LoginUser';

function App() {

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/services" element={ <Services /> } />
                <Route path="/contato" element={ <Contact /> } />
                {/* <Route path="/login" element={ <LoginUser /> } /> */}
            </Routes>
        </div>
    );
};

export default App;