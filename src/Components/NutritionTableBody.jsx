import React from "react";
import VitaminRow from "./VitaminRow";
import CarbsRow from "./CarbsRow";
import FatRow from "./FatRow";
import CaloriesRow from "./CaloriesRow";

export default function NutritionTableBody({ data }) {
  return (
    <>
      <tr>
        <td>
          <div class="line">Amount Per Serving</div>
        </td>
      </tr>
      <CaloriesRow calData={data.Calories}/>
      <tr>
        <td>
          <div class="line">
            <div class="dvlabel">
              % Daily Value<sup>*</sup>
            </div>
          </div>
        </td>
      </tr>
      <FatRow fatData={data.Fat} />
      <tr>
        <td>
          <div class="line">
            <div class="label">
              Cholesterol <div class="weight">{data.Cholesterol[0]}</div>
            </div>
            <div class="dv">{data.Cholesterol[1]}</div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="line">
            <div class="label">
              Sodium <div class="weight">{data.Sodium[0]}</div>
            </div>
            <div class="dv">{data.Potassium[1]}</div>
          </div>
        </td>
      </tr>
      <CarbsRow carbData={data.Carbs} />
      <tr>
        <td>
          <div class="line">
            <div class="label">
              Protein <div class="weight">{data.Protein[0]}</div>
            </div>
          </div>
        </td>
      </tr>
      <VitaminRow vitaminData={data.Vitamin} />
    </>
  );
}
