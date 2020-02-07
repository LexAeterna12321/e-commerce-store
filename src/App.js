import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/SignInAndSingUp/SignInAndSingUp";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/shop" exact component={ShopPage} />
          <Route path="/signIn" exact component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
