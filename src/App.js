import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Assets/css/App.css';
import NavBar from './Components/NavBar';
import Home from './Sections/Home';
import Contact from './Sections/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <div>
      <Switch>
        <Route exact path="/">
          <Home />
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
