import React, { useState } from 'react';

const ShoppingCart = () => {
  // State to manage form input values
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);

  // State to manage items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Event handler for form submission
  const handleAddToCart = (e) => {
    e.preventDefault();

    // Create a new item object
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      price: itemPrice,
    };

    // Update the cartItems state
    setCartItems([...cartItems, newItem]);

    // Reset form fields
    setItemName('');
    setItemQuantity(0);
    setItemPrice(0);
  };

  // Calculate the total price for all items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div>
      {/* Form to add items to the cart */}
      <form onSubmit={handleAddToCart}>
        <label>
          Product:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="number" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.valueAsNumber)} />
        </label>
        <label>
          Price per Unit:
          <input type="number" value={itemPrice} onChange={(e) => setItemPrice(e.target.valueAsNumber)} />
        </label>
        <button type="submit">Add to Cart</button>
      </form>

      {/* Cart section */}
      <div>
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price per Unit</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total:</td>
              <td>${calculateTotalPrice().toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCart;
