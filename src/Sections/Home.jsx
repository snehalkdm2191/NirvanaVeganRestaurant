import React from "react";
import Header from "../Components/Header";
import HomeCategories from "../Components/HomeCategories";

function Home() {
  return (
    <div>
      <div id="Home-section">
        <Header />
      </div>
        <HomeCategories/>
    </div>
  );
}

export default Home;
