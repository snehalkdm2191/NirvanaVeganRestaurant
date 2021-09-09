import React from "react";
import { useLocation} from "react-router-dom";
import { useRecoilState } from "recoil";
import { foodListState } from "../State/FoodListState";
import Header from "../Components/Header";
import CategoryList from "../Components/CategoryList";

function Category() {
  const { state } = useLocation();
  const category = state === undefined ? null : state.name;
  console.log(category);
  const [Foodlist] = useRecoilState(foodListState);
  const FoodDetails = Foodlist.filter((li) => li.type === category);
  return (
    <div>
      <div id="product-section">
        <Header section="Home" />
      </div>
      <CategoryList FoodDetails={FoodDetails}/>
    </div>
  );
}

export default Category;
