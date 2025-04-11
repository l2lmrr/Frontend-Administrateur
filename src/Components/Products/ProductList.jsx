import { useProducts } from '../../Context/ProductContext';

const ProductList = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <div>Loading products...</div>;
  if (!products.length) return <div>No products found</div>;

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span>${product.price}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;