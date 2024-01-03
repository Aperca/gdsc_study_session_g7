import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  const products = [
    { id: 1, name: 'abc', price: 10, image: 'product1.jpg' },
    { id: 2, name: 'xyz', price: 20, image: 'product2.jpg' },
  ];

  return (
    <div>
      <h1>Product Listings</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <NavLink to={`/product/${product.id}`}>View Details</NavLink>
        </div>
      ))}
    </div>
  );
}

export default Home;