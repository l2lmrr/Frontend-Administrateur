import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../../src/Components/assets/styles/Home.css';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Streamline your workflow with our powerful tools</p>
          {user ? (
            <Link to="/dashboard" className="cta-button">Go to Dashboard</Link>
          ) : (
            <div className="auth-actions">
              <Link to="/login" className="cta-button primary">Login</Link>
              <Link to="/register" className="cta-button secondary">Register</Link>
            </div>
          )}
        </div>
        <div className="hero-image">
          <img src="/images/hero-illustration.svg" alt="App illustration" />
        </div>
      </header>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Lightning-fast response times for all your needs</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Data</h3>
            <p>Enterprise-grade security for your peace of mind</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Real-time Sync</h3>
            <p>Your data updates instantly across all devices</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;