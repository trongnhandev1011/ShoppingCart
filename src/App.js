import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from './firebase/firebase.utils';

import "./App.css";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
