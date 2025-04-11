import { createContext, useContext, useState, useEffect } from 'react';
import api from '../Services/axios';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    // setIsLoading(true);
    // try {
      const { data } = await api.get('v1/admin/products');
      console.log(data.data);
    //   setProducts(data);
    // } catch (err) {
    //   setError(err.response?.data?.message || 'Error fetching products');
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const addProduct = async (productData) => {
    try {
      const { data } = await api.post('/v1/admin/products', productData);
      setProducts(prev => [...prev, data]);
    } catch (err) {
      throw err.response?.data;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading, error, addProduct, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);