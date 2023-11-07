import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaLivros } from '../components/ListaLivros';


function ExcluirLivro() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recLivroListaById = ListaLivros.filter((item) => item.id == id);
  const [livros] = useState({
    id: recLivroListaById[0].id,
    nome: recLivroListaById[0].nome,
    desc: recLivroListaById[0].desc,
    valor: recLivroListaById[0].valor,
  });
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaLivros.forEach((item, index) => {
      if (item.id == livros.id) {
        indice = index;
      }
    });
    ListaLivros.splice(indice, 1);
    navigate('/livros');
  };

  return (
    <section>
      <h1>Excluir livros</h1>
      <div>
        <p>Nome : {livros.nome}</p>
        <p>Desc : {livros.desc}</p>
        <p>valor : {livros.valor}</p>
      </div>
      <div className='buttons'>
        <button onClick={handleExclude} >
          EXCLUIR
        </button>
        <button onClick={() => navigate('/livros')}>
          CANCELAR
        </button>
      </div>
    </section>
  );
}
export default ExcluirLivro;
