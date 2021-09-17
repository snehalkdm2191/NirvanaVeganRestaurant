import React from "react";
import { Link } from "react-router-dom";

export default function CategoryList({ FoodDetails }) {
  return (
    <div className="category-list container">
      <h2>Super Delicious Menu</h2>
      {FoodDetails.map((foodList) => (
        <div className="row category-row">
          <div className="col-md-4">
            <div className="category-img-div">
            <Link
              to={{
                pathname: `/product/${foodList.name}`,
                state: { name: foodList.name },
              }}
            >
            <img
              className="category-food-img"
              src={require(`../assets/img/${foodList.pic}`).default}
              alt={foodList.name}
            />
            </Link>
            </div>
          </div>
          <div className="col-md-8 category-text">
            <Link
              to={{
                pathname: `/product/${foodList.name}`,
                state: { name: foodList.name },
              }}
            >
             <h4>{foodList.name}</h4>
            </Link>
            <p>{foodList.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}