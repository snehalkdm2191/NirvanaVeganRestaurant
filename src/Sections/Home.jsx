import React from "react";
import Hero from "../components/Hero";
import HomeCategories from "../components/HomeCategories";

export default function Home() {
  return (
    <div>
      <div id="Home-section">
        <Hero section="Home" />
      </div>
        <HomeCategories/>
    </div>
  );
}
