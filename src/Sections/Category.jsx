import React from "react";
import { useLocation} from "react-router-dom";
import { useRecoilState } from "recoil";
import { foodListState } from "../state/FoodListState";
import Hero from "../components/Hero";
import CategoryList from "../components/CategoryList";

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
