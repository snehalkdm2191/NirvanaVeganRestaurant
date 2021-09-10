import React from "react";
import NutritionTableBody from "../Components/NutritionTableBody";

function NutritionTable({ NutriDetails }) {
  return (
    <div id="nutritionfacts">
      {NutriDetails.map((nutri) => (
        <table cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td align="center" class="header">
                Nutrition Facts
              </td>
            </tr>
            <tr>
              <td>
                <div class="serving">
                  {nutri.name} <br /> Serving per container
                </div>
              </td>
            </tr>
            <tr style={{ height: "6px" }}>
              <td bgcolor="#000000"></td>
            </tr>
            <NutritionTableBody data={nutri} />
            <tr style={{ height: "2px" }}>
              <td bgcolor="#000000"></td>
            </tr>
            <tr className="nutri-para">
              <p>
                * Nutritional details are an estimate and should only be used as
                a guide for approximation.
              </p>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default NutritionTable;
