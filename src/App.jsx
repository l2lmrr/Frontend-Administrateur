import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../src/Context/AuthContext';
import { ProductProvider } from '../src/Context/ProductContext';
import Layout from '../src/Components/Layout/layout';
import ProtectedRouter from './routers/ProtectedRouter';
import AuthRouter from '../src/routers/authrouter';
import Home from '../src/pages/Home';
import Dashboard from '../src/pages/dahsboard';
import Products from '../src/pages/Products';
import Profile from '../src/pages/Profile';
import NotFound from '../src/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="auth/*" element={<AuthRouter />} />
              
              {/* Protected Routes */}
              <Route element={<ProtectedRouter />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              
              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;