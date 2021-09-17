import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { foodListState } from "../state/FoodListState";
import NutritionTable from "../components/NutritionTable";
import ProductDetails from "../components/ProductDetails";

export default function Product() {
  const { state } = useLocation();
  const product = state === undefined ? null : state.name;
  const [FoodList] = useRecoilState(foodListState);
  const productDetails = FoodList.filter((li) => li.name === product);
  return (
    <div>
      <div id="product-section">
        {productDetails.map((details) => (
          <img
            className="product-img"
            src={require(`../assets/img/${details.pic}`).default}
            alt={details.name}
          />
        ))}
      </div>
        <ProductDetails productData={productDetails} />
      <div className="d-flex justify-content-center">
        <NutritionTable NutriDetails={productDetails} />
      </div>

      {productDetails.map((details) => (
        <Link
          className="btn back-button"
          to={{
            pathname: `/category/${details.type}`,
            state: { name: details.type },
          }}
        >
          <span>Back To Menu</span>
        </Link>
      ))}
    </div>
  );
}