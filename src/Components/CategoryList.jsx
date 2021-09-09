import React from "react";
import { Link } from "react-router-dom";

function CategoryList({ FoodDetails }) {
  return (
    <div className="category-list container">
      {FoodDetails.map((foodList) => (
        <div className="row category-row">
          <div className="col-md-4">
            <div className="category-img-div">
            <img
              className="category-food-img"
              src={require(`../Assets/img/${foodList.pic}`).default}
              alt={foodList.name}
            />
            </div>
          </div>
          <div className="col-md-8">
            <Link
              to={{
                pathname: `/product/${foodList.name}`,
                state: { name: foodList.name },
              }}
            >
              {foodList.name}
            </Link>
            <p>{foodList.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
