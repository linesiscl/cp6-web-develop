import {} from 'react'
import '../css/CardLivro.css';
import ImageSlider from './ImageSlider';

const CardLivro = ({ images, titulo, descricao, preco }) => {
  return (
    <div className="card-livro">
      <ImageSlider images={images} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <p>Preço: {preco}</p>
    </div>
  );
};

export default CardLivro;
