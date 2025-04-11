// src/routers/ProtectedRouter.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import Loading from '../Components/UI/Loading';

const ProtectedRouter = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loading />;
  
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRouter;