import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/apples/products/'); // Adjust the URL to your Django endpoint
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product, index) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden" key={index}>
          <img
            src={product.photo_url} // Ensure this matches the field in your API response
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600">Price: ${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Test;
