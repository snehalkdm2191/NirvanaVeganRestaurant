import React from "react";

function HomeCategories() {
  return (
    <div className="Home-categories">
      <div className="row Home-dish-text">
        <div className="col-md-6 home-dish">
        </div>
        <div className="col-md-6 home-bg">
          <h2>Dishes</h2>
          <p>A vegan lifestyle prevents a tremendous amount of animal slaughter and suffering. It offers a potent way to shrink our environmental footprint, especially in regard to climate change. And a well-planned vegan diet can fuel the highest levels of fitness, while reducing our risk of various chronic diseases. Plus, the food is insanely delicious </p>
          <button className="btn btn-dish" type="button">
            View Menu
          </button>
        </div>
      </div>
      <div className="row Home-deserts-text">
        <div className="col-md-6 home-bg">
          <h2>Desserts</h2>
          <p>
            Nirvana Desserts offers you a wide range of delicious desserts and
            cakes.Deliciously vegan and gluten free but with no compromise on
            taste. Our extensive range of delicious desserts and cakes answer
            almost any sweet bakery need. With thousands of tempting bakes
            across our business, including snacking, premium desserts, rustic
            handmade cakes and bespoke development, we are sure to have the
            right treat to tempt you.
          </p>
          <button className="btn btn-deserts" type="button">
            View Menu
          </button>
        </div>
        <div className="col-md-6 home-deserts">
        </div>
      </div>
      <div className="row Home-drinks-text">
        <div className="col-md-6 home-drinks"></div>
        <div className="col-md-6 home-bg">
          <h2>Drinks</h2>
          <p>When it comes to cocktails, I like them to be refreshing, and this mocktail is the perfect summer refreshment. Sparkling water gives it the bubbly replacement of alcohol, whilst kombucha adds even more fizziness and flavour – and did I mention this will not only boost your good gut bacteria, but that the chia seeds will also give you a great hit of healthy Omega oils? Green Matters compiled an extensive roundup of vegan Nirvana drinks to try, aside from black coffee or cold brew with almond milk, of course. The options are truly endless, and trust us, your coffee run is about to get exponentially more interesting.</p>
          <button className="btn btn-drinks" type="button">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCategories;
