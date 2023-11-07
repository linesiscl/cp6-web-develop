import { } from 'react';
import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import CardLivro from '../components/CardLivro';
import '../css/Home.css'; 
import '../css/CardLivro.css'; 

function Home() {
  const [slidePreview, setSlidePreview] = useState(1);

  const imagens_js = [
    { id: '1', image: './src/images/livro_js_01.jpg' },
    { id: '2', image: './src/images/livro_js_02.jpg' },
    { id: '3', image: './src/images/livro_js_03.jpg' }
  ];
  const imagens_c = [
    { id: '1', image: './src/images/livro_c_01.jpg' },
    { id: '2', image: './src/images/livro_c_02.jpg' },
    { id: '3', image: './src/images/livro_c_03.jpg' }
  ];
  const imagens_python = [
    { id: '1', image: './src/images/livro_py_01.jpg' },
    { id: '2', image: './src/images/livro_py_02.jpg' },
    { id: '3', image: './src/images/livro_py_03.jpg' }
  ];


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePreview(1);
      } else {
        setSlidePreview(2);
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return (
    <>

      <div>
        <h1>Biblioteca para Programadores</h1>
        <p>Uma coleção de livros essenciais para programadores e desenvolvedores.</p>

        <div className="card-livro-container">
          <CardLivro
            images={imagens_js}
            titulo="Javascript"
            descricao="Aprenda do iniciante ao avançado sobre Backend com Javascript"
            preco="A partir de R$19.99"
          />
          <CardLivro
            images={imagens_c}
            titulo="C"
            descricao="Aprenda do iniciante ao avançado sobre Desenvolvimento com C e C++"
            preco="A partir de R$45.99"
          />
          <CardLivro
            images={imagens_python}
            titulo="Python"
            descricao="Aprenda do iniciante ao avançado sobre Ciência de Dados com Python"
            preco="A partir de R$23.99"
          />
        </div>
      </div>
    </>
  )
}

export default Home;
