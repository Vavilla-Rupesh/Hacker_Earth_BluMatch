import React, { useEffect, useState } from "react";
import axios from "axios";
import Businesscard from "./components/Businesscard";
import ProductsCard from "./components/ProductsCard";
import BusinessPopUp from "./components/BusinessPopUp";
function Business() {
  const [data2, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    handle();
  }, []);
  async function handle() {
    try {
      const result = await axios.get("http://localhost:3000/business-details");
      setData(result.data);
      console.log(data2);
    } catch (e) {
      console.log(e);
    }
  }

  function handleProductClick(product) {
    setSelectedProduct(product);
  }

  function closePopUp() {
    setSelectedProduct(null);
  }

  return (
    <div className="business-container">
      {data2.map((d) => (
        <Businesscard
        key ={d.name}
        name={d.name}
        location={d.location}
        qualityAssurance={d.qualityAssurance}
        contact={d.contact}
        price={d.price}
        onClick={() => handleProductClick(d)} />
      ))}
       {selectedProduct && (
        <BusinessPopUp product={selectedProduct} onClose={closePopUp} />
      )}
    </div>
  );
}

export default Business;
