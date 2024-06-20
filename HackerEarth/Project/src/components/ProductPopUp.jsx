// import React from "react";

// function ProductPopUp({ product, onClose }) {
//   return (
//     <div className="popUp">
//       <div className="popUp-content">
//         <span className="close" onClick={onClose}>
//           &times;
//         </span>
//         <h1>{product.name}</h1>
//         <p>{product.location}</p>
//         {/* <img src={product.image} alt={product.name} /> */}
//         <img src="https://picsum.photos/200/200" alt="" />
//         <p>{product.qualityAssurance}</p>
//         <p>{product.contact}</p>
//         <p>{product.price}</p>
//         <button>Add to cart</button>
//       </div>
//     </div>
//   );
// }

// export default ProductPopUp;
// ProductPopUp.js
import React, { useContext } from "react";
import { CartContext } from "./CardContext"; 

function ProductPopUp({ product, onClose }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert("Added to cart!");
  };

  return (
    <div className="popUp">
      <div className="popUp-content">
        <div className="grid_content content_grid">
          <div className="det">
            <img src="https://picsum.photos/200/200" alt="" />
          </div>
        </div>
        <div className="grid_content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h1 className="up">{product.name}</h1>
          <p className="down">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ea
            nihil tempora, cum consectetur similique nesciunt nostrum quasi
            tempore necessitatibus cupiditate excepturi aspernatur. Sunt
            corrupti nulla ex ratione dolores voluptas.{" "}
          </p>
          <p className="margin_gap">
            <img src="/gps.svg" alt="" />
            {product.location}
          </p>
          {/* <img src={product.image} alt={product.name} /> */}
          <p>{product.qualityAssurance}</p>
          <p>{product.contact}</p>
          <p>{product.price}</p>
          <button className="gradient-button" onClick={handleAddToCart}>
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <img
                  src="/shopping-cart.svg"
                  className="shopping"
                  alt="cart icon"
                />
              </div>
            </div>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPopUp;
