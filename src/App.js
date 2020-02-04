import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
