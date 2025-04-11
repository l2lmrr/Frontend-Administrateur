import { useAuth } from '../Context/AuthContext';
import { useProducts } from '../Context/ProductContext';
import ProductList from '../Components/Products/ProductList';
import AddProductForm from '../Components/Products/AddProductForm';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { products, isLoading, addProduct } = useProducts();

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome, {user?.name}</h1>
        <button onClick={logout}>Logout</button>
      </header>
      
      <section>
        <h2>Products</h2>
        <AddProductForm onAdd={addProduct} />
        {isLoading ? <p>Loading products...</p> : <ProductList products={products} />}
      </section>
    </div>
  );
};

export default Dashboard;