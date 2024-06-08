import React, { useState, useEffect } from "react";

export default function Week() {
  let [lunch, setLunch] = useState([]);

  return (
    <div>
      <h2>지하 학생식당</h2>
      <div className="lunch">
        <h3>중식(11:00 ~ 14:00)</h3>
        <div>
          {lunch.map((menu, idx) => {
            return (
              <div key={idx}>
                <p>
                  {lunch.month}월({menu.day})
                </p>
                <ul>
                  {lunch.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dinner">
        <h3>석식(17:00 ~ 19:00)</h3>
      </div>
    </div>
  );
}
