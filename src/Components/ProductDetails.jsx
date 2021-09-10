import React from "react";
import { Link } from "react-router-dom";

function ProductDetails({ productData }) {
  return (
    <div className="product-details-section">
      {productData.map((product) => (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>Ingridients</h4>
          {product.ingridients.map((ingridient) => (
            <h6>{ingridient}</h6>
          ))}
          <Link
            className="btn back-button"
            to={{
              pathname: `/category/${product.type}`,
              state: { name: product.type },
            }}
          >
            <span>Back To Menu</span>
          </Link>
        </>
      ))}
    </div>
  );
}

export default ProductDetails;
