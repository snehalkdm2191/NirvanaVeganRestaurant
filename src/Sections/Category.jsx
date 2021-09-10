import React from "react";
import { useLocation} from "react-router-dom";
import { useRecoilState } from "recoil";
import { foodListState } from "../State/FoodListState";
import Hero from "../Components/Hero";
import CategoryList from "../Components/CategoryList";

function Category() {
  const { state } = useLocation();
  const category = state === undefined ? null : state.name;
  const [Foodlist] = useRecoilState(foodListState);
  const FoodDetails = Foodlist.filter((li) => li.type === category);
  return (
    <div>
      <div id="category-section">
        <Hero section={category} />
      </div>
      <CategoryList FoodDetails={FoodDetails}/>
    </div>
  );
}

export default Category;
