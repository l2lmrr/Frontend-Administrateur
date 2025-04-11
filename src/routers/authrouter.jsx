import { Routes, Route } from 'react-router-dom';
import Login from '../Components/Auth/login';
import Register from '../Components/Auth/register';


const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AuthRouter;