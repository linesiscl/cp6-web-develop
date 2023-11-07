import React from 'react';
import '../css/Sobre.css';

function Sobre() {
  return (
    <div className="sobre-page">
      <h1>Sobre Nós</h1>
      <div className="card-container">
        <div className="card">
          <img src="./src/images/avatar_sobre.png" alt="Imagem 1" />
          <p>Aline Fernandes Zeppelini</p>
        </div>
        <div className="card">
          <img src="./src/images/avatar_sobre.png" alt="Imagem 2" />
          <p>Camilly Breitbach Ishida</p>
        </div>
        <div className="card">
          <img src="./src/images/avatar_sobre.png" alt="Imagem 3" />
          <p>Gabriel Antony Cadima Ciziks</p>
        </div>
        <div className="card">
          <img src="./src/images/avatar_sobre.png" alt="Imagem 4" />
          <p>Lucca Sabatini Tambellini</p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
