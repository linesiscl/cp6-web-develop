import {} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
  const navigate = useNavigate();
  const isAuthenticated = sessionStorage.getItem('userLogin')

  const handleLogout = async () => {
    sessionStorage.removeItem('userLogin');
    sessionStorage.removeItem('userPass');
    alert("Saindo da sessão");
    navigate('/');
  }

  return (
    <header className="header">
      <h2>CodeLib</h2>
      <nav>
        <ul>
          <li>
            <Link to="/" className='link'>Home</Link>
          </li>
          <li>
            <Link to="/sobre" className='link'>Sobre Nós</Link>
          </li>
          <li>
            <Link to="/pedidos" className='link'>Pedidos</Link>
          </li>
          <li>
            <Link to="/livros" className='link'>Livros</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/cadastrar/livros" className='cadastros'>Cadastrar Livros</Link>
              </li>
              <li>
                <Link to="/cadastrar/pedidos" className='cadastros'>Cadastrar Pedidos</Link>
              </li>
              <li>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
