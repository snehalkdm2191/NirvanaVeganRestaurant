import React from "react";
import HomeBg from "../assets/video/HomePage-bg.mp4";
import DishBg from "../assets/video/dish.mp4";
import DrinkBg from "../assets/video/drink.mp4";
import DessertBg from "../assets/video/dessert.mp4";
import ContactBg from "../assets/video/contact-bg.mp4";
import VideoPlayer from "./VideoPlayer";

export default function Hero({ section }) {
  switch (section) {
    case "Dish":
      return <VideoPlayer key="Dish" vidLink={DishBg}/>;
    case "Dessert":
      return <VideoPlayer key="Dessert" vidLink={DessertBg}/>;
    case "Drink":
      return <VideoPlayer key="Drink" vidLink={DrinkBg}/>;
    case "contact":
      return <VideoPlayer key="contact" vidLink={ContactBg}/>;
    default:
      return <VideoPlayer key="Home" vidLink={HomeBg}/>;
  }
}
