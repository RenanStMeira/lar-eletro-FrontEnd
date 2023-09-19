interface UserDataProps {
  nome: string;
  email: string;
  endereco: string;
  telefone: string;
}

function UserData(props: UserDataProps) {
  const { nome, email, endereco, telefone } = props;

  return (
    <div>
      <h2>Dados do Usuário:</h2>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Endereço:</strong> {endereco}</p>
      <p><strong>Telefone:</strong> {telefone}</p>
    </div>
  );
}

export default UserData;
