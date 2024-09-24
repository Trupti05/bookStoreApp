// src/cart/Cart.jsx
import React from 'react';

const Cart = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <div className="flex flex-col space-y-4">
        {/* Rent Section */}
        <div className="border p-4 rounded shadow">
          <h3 className="text-xl font-medium mb-2">Rent</h3>
          <p>No items for rent in the cart.</p>
        </div>

        {/* Buy Section */}
        <div className="border p-4 rounded shadow">
          <h3 className="text-xl font-medium mb-2">Buy</h3>
          <p>No items for buy in the cart.</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;