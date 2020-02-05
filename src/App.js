import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/Shop";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
