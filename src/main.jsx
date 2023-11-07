import {} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Error from './routes/Error'
import Home from './routes/Home'
import Login from './routes/Login'
import Livros from './routes/Livros'
import Pedido from './routes/Pedido'
import Sobre from './routes/Sobre'
import InserirLivro from './routes/InserirLivro'
import InserirPedido from './routes/InserirPedido'
import EditarLivro from './routes/EditarLivro'
import EditarPedido from './routes/EditarPedido'
import ExcluirLivro from './routes/ExcluirLivro'
import ExcluirPedido from './routes/ExcluirPedido'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login/> },
      { path: '/sobre', element: <Sobre /> },

      { path: '/pedidos', element: <Pedido /> },
      { path: '/cadastrar/pedidos', element: <InserirPedido /> },
      { path: '/editar/pedidos/:id', element: <EditarPedido /> },
      { path: '/excluir/pedidos/:id', element: <ExcluirPedido /> },

      { path: '/livros', element: <Livros /> },
      { path: '/cadastrar/livros', element: <InserirLivro /> },
      { path: '/editar/livros/:id', element: <EditarLivro /> },
      { path: '/excluir/livros/:id', element: <ExcluirLivro /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);

