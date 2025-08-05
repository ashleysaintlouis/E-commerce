// src/routes/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Exemplo com token simples

  return isAuthenticated ? children : <Navigate to="/signup" />;
};

export default PrivateRoute;
