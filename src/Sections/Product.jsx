import React from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { foodListState } from "../State/FoodListState";
import NutritionTable from "../Components/NutritionTable";
import ProductDetails from "../Components/ProductDetails";

function Product() {
  const { state } = useLocation();
  const product = state === undefined ? null : state.name;
  const [FoodList] = useRecoilState(foodListState);
  const NutriDetails = FoodList.filter((li) => li.name === product);
  return (
    <div>
      <div id="product-section">
        {NutriDetails.map((nutri) => (
          <img
            className="product-img"
            src={require(`../Assets/img/${nutri.pic}`).default}
            alt={nutri.name}
          />
        ))}
      </div>
      <div className="row d-flex justify-content-center">
        <ProductDetails productData={NutriDetails} />
        <NutritionTable NutriDetails={NutriDetails} />
      </div>
    </div>
  );
}

export default Product;
