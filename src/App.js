import React,{useEffect} from "react";
import { useRecoilState } from "recoil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './assets/css/App.css';
import NavBar from "./components/NavBar";
import Home from './sections/Home';
import Product from './sections/Product';
import Category from './sections/Category';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import FoodListFile from "./data/VeganFood.json";
import { foodListState } from "./state/FoodListState";

export default function App() {
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