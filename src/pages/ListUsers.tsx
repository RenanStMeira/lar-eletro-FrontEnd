import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import UserData from "../components/UserData/userData";

function ListUsers() {
    // Defina os dados do usuário que você deseja exibir
    const userData = {
        nome: 'João da Silva',
        email: 'joao@example.com',
        endereco: '123 Rua Principal, Cidade',
        telefone: '(11) 1234-5678',
    };

    return (
        <div>
            <Header />
            {/* Passe os dados do usuário como propriedades para UserData */}
            <UserData
                nome={userData.nome}
                email={userData.email}
                endereco={userData.endereco}
                telefone={userData.telefone}
            />
            <Footer />
        </div>
    );
}

export default ListUsers;
