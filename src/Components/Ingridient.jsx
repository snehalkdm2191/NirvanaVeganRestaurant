import React from "react";

export default function Ingridient({ ingridient }) {
  return (
    <div  className="ingridient-section">
      {ingridient.map((ingri) => (
        <div className="ingridient-list">
          <img
            src={require(`../assets/img/${ingri.img}`).default}
            alt={ingri.name}
          />
          <h6>{ingri.name}</h6>
        </div>
      ))}
    </div>
  );
}
