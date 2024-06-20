import React, { useContext, useState } from "react";
import { CartContext } from "./CardContext";
import BusinessPopUp from "./BusinessPopUp";

function Cart() {
  const { cartItems } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCartItemClick = (item) => {
    setSelectedProduct(item);
  };

  const closePopUp = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="cartContainer">
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} onClick={() => handleCartItemClick(item)}>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      )}
      {selectedProduct && (
        <BusinessPopUp product={selectedProduct} onClose={closePopUp} />
      )}
    </div>
    </div>
  );
}

export default Cart;
