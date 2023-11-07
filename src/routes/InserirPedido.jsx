import { useState } from 'react';
import { ListaPedidos } from '../components/ListaPedidos';
import { useNavigate } from 'react-router-dom';
import { apiEndereco } from '../components/apiEndereco';
function InserirPedido() {
  const navigate = useNavigate();


  let novoIdPedido = ListaPedidos[ListaPedidos.length - 1].id + 1;

  const [pedido, setPedido] = useState({
    id: novoIdPedido,
    nome: '',
    desc: '',
    valor: '',
    endereco: {
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ListaPedidos.push(pedido);
    navigate('/pedidos');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cep') {
      setPedido({ ...pedido, endereco: { ...pedido.endereco, [name]: value } });
    } else {
      setPedido({ ...pedido, [name]: value });
    }
  };
  const handleBuscarEndereco = () => {
    apiEndereco(pedido.endereco.cep, pedido, setPedido);
  };
  return (
    <section>
      <h1>Cadastro de pedidos</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Pedido</legend>
          <p>
            <label htmlFor="idNome"> Nome do pedido:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
              value={pedido.nome}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idDesc">Descrição pedido:</label>
            <input
              type="text"
              name="desc"
              id="idDesc"
              value={pedido.desc}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idValor"> Valor do pedido:</label>
            <input
              type="text"
              name="valor"
              id="idValor"
              value={pedido.valor}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idCEP">CEP:</label>
            <input
              type="text"
              name="cep"
              id="idCEP"
              value={pedido.endereco.cep}
              onChange={handleChange}
            />
            <button type='button' onClick={handleBuscarEndereco}>Buscar Endereço</button>
          </p>
          <p>
            <label htmlFor="idRua">Rua:</label>
            <input
              type="text"
              name="endereco.rua"
              id="idRua"
              value={pedido.endereco.rua}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idBairro">Bairro:</label>
            <input
              type="text"
              name="endereco.bairro"
              id="idBairro"
              value={pedido.endereco.bairro}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idCidade">Cidade:</label>
            <input
              type="text"
              name="endereco.cidade"
              id="idCidade"
              value={pedido.endereco.cidade}
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor="idEstado">Estado:</label>
            <input
              type="text"
              name="endereco.estado"
              id="idEstado"
              value={pedido.endereco.estado}
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

export default InserirPedido;
