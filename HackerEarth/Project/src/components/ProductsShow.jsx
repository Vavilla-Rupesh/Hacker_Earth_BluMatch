import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardHeader from './DashboardHeader';
import ProductsCard from './ProductsCard';
import ProductPopUp from './ProductPopUp';
import { CartProvider } from './CardContext';

function ProductsShow() {
  const [data2, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    handle();
  }, []);

  async function handle() {
    try {
      const result = await axios.get('http://localhost:3000/product-details');
      setData(result.data);
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
    <CartProvider>
      <div className="overallContainerDashboard">
        <DashboardHeader />
        <div className="business-container">
          {data2.map((d) => (
            <ProductsCard
              key={d.name}
              name={d.name}
              location={d.location}
              image={d.image}
              qualityAssurance={d.qualityAssurance}
              contact={d.contact}
              price={d.price}
              onClick={() => handleProductClick(d)}
            />
          ))}
          {selectedProduct && (
            <ProductPopUp product={selectedProduct} onClose={closePopUp} />
          )}
        </div>
      </div>
    </CartProvider>
  );
}

export default ProductsShow;
