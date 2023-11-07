import { useState } from 'react';
import { ListaLivros } from '../components/ListaLivros';
import { useNavigate } from 'react-router-dom';


function InserirLivro() {
  const navigate = useNavigate();

  let novoIdLivro = ListaLivros[ListaLivros.length - 1].id + 1;

  const [livro, setLivro] = useState({
    id: novoIdLivro,
    nome: '',
    desc: '',
    valor: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    ListaLivros.push(livro);
    navigate('/livros');
  };

  const handleChange = (e) => {
    e.preventDefault();
    
    const { name, value } = e.target;
    
    setLivro({ ...livro, [name]: value });
  };

  return (
    <section>
      <h1>Cadastro de Livros</h1>
      
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Livro</legend>
          <p>
            <label htmlFor="idNome"> Nome do Livro:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
           
              value={livro.nome}
             
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idDesc">Descrição Livro:</label>
            <input
              type="text"
              name="desc"
              id="idDesc"
              
              value={livro.desc}
              
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idValor"> Valor do Livro:</label>
            <input
              type="text"
              name="valor"
              id="idValor"
              
              value={livro.valor}
              
              onChange={handleChange}
            />
          </p>
          <p>
            <button type="submit">
              CADASTRAR
            </button>
          </p>
        </fieldset>
      </form>
    </section>
  );
}
export default InserirLivro;

  