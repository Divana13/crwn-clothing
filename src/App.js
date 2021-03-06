import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.components.jsx";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
