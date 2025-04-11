import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home">
      <h1>Welcome to Our App</h1>
      {user ? (
        <p>You're logged in! <Link to="/dashboard">Go to Dashboard</Link></p>
      ) : (
        <div className="auth-options">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Home;