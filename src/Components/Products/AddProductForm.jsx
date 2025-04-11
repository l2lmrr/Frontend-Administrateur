import { useState } from 'react';
import { useProducts } from '../../Context/ProductContext';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });
  const { addProduct } = useProducts();

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
    setFormData({ name: '', description: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input
        type="text"
        placeholder="Product name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({...formData, price: e.target.value})}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;