import React from "react";
import Hero from "../Components/Hero";
import HomeCategories from "../Components/HomeCategories";

// use single line exports
function Home() {
  return (
    <div>
      <div id="Home-section">
        <Hero section="Home" />
      </div>
      <HomeCategories />
    </div>
  );
}

export default Home;
