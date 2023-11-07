const apiEndereco = async (cep, pedido, setPedido) => {
    if (cep.length === 8) {
      const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
  
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Não foi possível obter os dados do CEP.');
        }
  
        const data = await response.json();
        setPedido({
          ...pedido,
          endereco: {
            cep: data.cep,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
          },
        });
      } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
      }
    }
  };
  
  export { apiEndereco };