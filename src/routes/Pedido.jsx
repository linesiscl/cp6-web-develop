import {} from 'react';
import { Link } from 'react-router-dom';
import { ListaPedidos } from '../components/ListaPedidos';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import '../css/Tabelas.css';

function Pedido() {
  return (
    <section>
      <h1>LISTA DE PEDIDOS</h1>
      <div className='tabela'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>PREÇO</th>
              <th>CEP</th>
              <th>CIDADE</th>
              <th>RUA</th>
              <th>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {ListaPedidos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>{item.valor}</td>
                <td>{item.endereco.cep}</td>
                <td>{item.endereco.cidade}</td>
                <td>{item.endereco.rua}</td>
                
                <td>
                  {' '}
                  {/*Link para chamar a tela de editar pedidos */}
                  <Link to={`/editar/pedidos/${item.id}`}>
                    <Editar />
                  </Link>{' '}
                  | {/*Link para chamar a tela de excluir pedidos */}
                  <Link to={`/excluir/pedidos/${item.id}`}>
                    <Excluir />
                    {/*espaço entre os links '' */}
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
export default Pedido;
