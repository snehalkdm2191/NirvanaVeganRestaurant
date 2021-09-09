import React from "react";

function CarbsRow({ carbData }) {
  return (
    <>
      {carbData.map((carbs) => (
        <>
          <tr style={{ height: "0.8px" }}>
            <td bgcolor="#000000"></td>
          </tr>
          <tr>
            <td>
              <div class="line">
                <div class="label">
                  Total Carbohydrates{" "}
                  <div class="weight">{carbs.TotalCarb[0]}</div>
                </div>
                <div class="dv">{carbs.TotalCarb[1]}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="indent">
              <div class="line">
                <div class="labellight">
                  Dietary Fiber <div class="weight">{carbs.Fiber[0]}</div>
                </div>
                <div class="dv">{carbs.Fiber[1]}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="indent">
              <div class="line">
                <div class="labellight">
                  Sugars <div class="weight">{carbs.Sugars[0]}</div>
                </div>
              </div>
            </td>
          </tr>
        </>
      ))}
    </>
  );
}

export default CarbsRow;
