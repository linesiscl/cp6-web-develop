import {} from 'react';
import { Link } from 'react-router-dom';
import { ListaLivros } from '../components/ListaLivros';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import '../css/Tabelas.css';
function Livros() {
  return (
    <section>
      <h1>LISTA DE LIVROS</h1>
      <div className='tabela'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
           
            {ListaLivros.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td>
                  {' '}
                  
                  <Link to={`/editar/livros/${item.id}`}>
                    <Editar />
                  </Link>{' '}
                  | 
                  <Link to={`/excluir/livros/${item.id}`}>
                    <Excluir />
                    
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Livros;
