import React from "react";
import HomeBg from "../Assets/img/HomePage-bg.mp4";
import DishBg from "../Assets/img/Dish.jpg";
import DrinImg from "../Assets/img/drink.jpg";
import DessertImg from "../Assets/img/Dessert.jpg";
import ContactBg from "../Assets/img/contact-bg.mp4";

function Hero({ section }) {
  let headerSource;
  switch (section) {
    case "Dish":
      headerSource = (
        <img width="100%" src={DishBg} alt="Dessert cover"/>
      );
      break;
    case "Dessert":
      headerSource = (
        <img width="100%" src={DessertImg} alt="Dessert cover"/>
      );
      break;
    case "Drink":
      headerSource = <img width="100%" src={DrinImg} alt="Dessert cover"/>;
      break;
    case "contact":
      headerSource = (
        <video width="100%" autoPlay playsInline loop muted>
          <source src={ContactBg} type="video/mp4" />
        </video>
      );
      break;
    default:
      headerSource = (
        <video width="100%" autoPlay playsInline loop muted>
          <source src={HomeBg} type="video/mp4" />
        </video>
      );
  }
  return (
    <div>
      {headerSource}
    </div>
  );
}

export default Hero;
