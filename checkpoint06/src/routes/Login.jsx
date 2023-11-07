import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import '../css/Login.css';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    const hashUsername = bcrypt.hashSync('useradmin', 10);
    const hashPassword = bcrypt.hashSync('passadmin', 10);

    if (bcrypt.compareSync(username, hashUsername) && bcrypt.compareSync(password, hashPassword)) {
      sessionStorage.setItem('userLogin', hashUsername);
      sessionStorage.setItem('userPass', hashPassword);
      setIsAuthenticated(true);
      alert('Autenticado com sucesso!');
    } else {
      alert('Usuário ou Senha incorretos.Tente Novamente!');
    }
  }

  return (
    <div className="login-container">
      {isAuthenticated ? ( 
        <h2>Seja Bem-vindo!</h2>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
          <div className="tip-bubble">
            <p>Dica: Utilize "useradmin" e "passadmin" respectivamente para se logar na plataforma.</p>
          </div>
        </div>
        
      )}
    </div>
  );
}


export default Login;
