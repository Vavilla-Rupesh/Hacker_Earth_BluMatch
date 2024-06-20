import React from "react";

function ProductsCard(props) {
  return (
    <div className="business-card" onClick={props.onClick}> 
      <img src={props.image} alt="" />
      <h1>{props.name} </h1>
      <h1>{props.price} </h1>
      <h1>{props.qualityAssurance} </h1>
    </div>
  );
}

export default ProductsCard;

