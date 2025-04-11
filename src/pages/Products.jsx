import { useProducts } from '../Context/ProductContext';
import ProductList from '../Components/Products/ProductList';
import AddProductForm from '../Components/Products/AddProductForm';

const Products = () => {
  const { isLoading } = useProducts();

  return (
    <div className="products-page">
      <h1>Products Management</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <AddProductForm />
          <ProductList />
        </>
      )}
    </div>
  );
};

export default Products;