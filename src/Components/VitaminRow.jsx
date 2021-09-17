import React from "react";

export default function VitaminRow({ vitaminData }) {
  return (
    <>
      <tr style={{ height: "1px" }}>
        <td bgcolor="#000000"></td>
      </tr>
      {vitaminData.map((vitamin) => (
        <tr>
          <td>
            <div class="line">
              <div class="labellight">{vitamin}</div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
