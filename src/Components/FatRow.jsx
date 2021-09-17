import React from "react";

export default function FatRow({ fatData }) {
  return (
    <>
      {fatData.map((fat) => (
        <>
          <tr>
            <td>
              <div class="line">
                <div class="label">
                  Total Fat <div class="weight">{fat.TotalFat[0]}</div>
                </div>
                <div class="dv">{fat.TotalFat[1]}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="indent">
              <div class="line">
                <div class="labellight">
                  Saturated Fat <div class="weight">{fat.SaturatedFat[0]}</div>
                </div>
                <div class="dv">{fat.SaturatedFat[1]}</div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="indent">
              <div class="line">
                <div class="labellight">
                  <i>Trans</i> Fat <div class="weight">0.0g</div>
                </div>
              </div>
            </td>
          </tr>
          <tr style={{ height: "0.6px" }}>
            <td bgcolor="#000000"></td>
          </tr>
        </>
      ))}
    </>
  );
}
