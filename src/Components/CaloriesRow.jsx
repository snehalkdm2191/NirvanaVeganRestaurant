import React from "react";

export default function CaloriesRow({ calData }) {
  return (
    <>
      <tr>
        <td>
          <div class="line">
            <div class="label">
              Calories <div class="weight">{calData[0]}</div>
            </div>
            <div
              style={{ paddingTop: "1px", float: "right" }}
              class="labellight"
            >
              Calories from Fat <div class="weight">{calData[1]}</div>
            </div>
          </div>
        </td>
      </tr>
      <tr style={{ height: "2px" }}>
        <td bgcolor="#000000"></td>
      </tr>
    </>
  );
}
