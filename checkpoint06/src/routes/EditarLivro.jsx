import { useNavigate, useParams } from 'react-router-dom';
import { ListaLivros } from '../components/ListaLivros';
import { useState } from 'react';

function EditarLivro() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recLivroListaById = ListaLivros.filter((item) => item.id == id);


  const [livro, setLivro] = useState({
    id: recLivroListaById[0].id,
    nome: recLivroListaById[0].nome,
    desc: recLivroListaById[0].desc,
    valor: recLivroListaById[0].valor,
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaLivros.forEach((item, index) => {
      if (item.id == livro.id) {
        indice = index;
      }
    });
    ListaLivros.splice(indice, 1, livro);
    navigate('/livros');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLivro({ ...livro, [name]: value });
  };

  return (
    <section >
      <h1 >EDITAR LIVROS</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>LIVRO SELECIONADO</legend>
          <div>
            <input
              type="hidden"
              name="id"
              value={livro.id}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idNome">Nome do livro:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
              value={livro.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idDesc">Descrição do livro:</label>
            <input
              type="text"
              name="desc"
              id="idDesc"
              value={livro.desc}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idValor">Valor do livro:</label>
            <input
              type="text"
              name="valor"
              id="idValor"
              value={livro.valor}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" >EDITAR</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default EditarLivro;
