import { useState } from "react";
import { restaurant } from "./../../data.js";
import "./restaurants.css";

export default function Restaurants() {
  // let img = process.env.PUBLIC_URL + "/images/red.png";
  return (
    <div className="r-container">
      <h2 className="title">이번주 학생 식단표</h2>
      <div className="restaurants">
        {restaurant.map((item, idx) => {
          return (
            <div className="restaurant">
              <img src={item.img } alt="식당 이미지" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /*
<img src="" alt="식당 이미지" />
<div>
  {name.map((item, idx) => {
    return <div>{item}</div>;
  })}
</div> 
*/
}
