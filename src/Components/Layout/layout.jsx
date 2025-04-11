import { Outlet } from 'react-router-dom';
import Navbar from '../UI/Navbar';
import Footer from '../UI/Footer';
import { useAuth } from '../../Context/AuthContext';

const Layout = () => {
  const { user } = useAuth();

  return (
    <div className="app-layout">
      <Navbar />
      <main className={user ? 'authenticated-layout' : 'auth-layout'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;