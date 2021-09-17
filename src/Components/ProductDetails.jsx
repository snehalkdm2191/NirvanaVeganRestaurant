import React from "react";
import Ingridient from "./Ingridient";

export default function ProductDetails({ productData }) {
  return (
    <div className="product-details-section container">
      {productData.map((product) => (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>Ingridients</h4>
          <Ingridient ingridient={product.ingridients}/>
        </>
      ))}
    </div>
  );
}
