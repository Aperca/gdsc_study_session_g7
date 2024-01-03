import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();

  const getProductDetails = (productId) => {
    const products = [
      { id: 1, name: 'abc', price: 10, imageUrl: 'https://example.com/product1.jpg' },
      { id: 2, name: 'xyz', price: 20, imageUrl: 'https://example.com/product2.jpg' },
    ];
  
    const product = products.find((p) => p.id === Number(productId));
  
    return product;
  };

  const product = getProductDetails(id);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src="book.png" alt={Books }/>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;