import React,{useEffect} from "react";
import { useRecoilState } from "recoil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Assets/css/App.css';
import NavBar from "./Components/NavBar";
import Home from './Sections/Home';
import Product from './Sections/Product';
import Category from './Sections/Category';
import Contact from './Sections/Contact';
import Footer from './Components/Footer';
import FoodListFile from "./Files/VeganFood.json";
import { foodListState } from "./State/FoodListState";

function App() {
    // Global state
    const [foodList, setFoodList] = useRecoilState(foodListState);

    // Methods
    function loadData(setFoodList) {
      const parsedFoodData = FoodListFile ?? [];
      setFoodList(parsedFoodData);
    }
  
    useEffect(() => loadData(setFoodList));
  
  return (
    <Router>
      <NavBar />
      <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/:name">
          <Product />
        </Route>
        <Route exact path="/category/:name">
          <Category />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      </div>
      <Footer/>
    </Router>

  );
}

export default App;
