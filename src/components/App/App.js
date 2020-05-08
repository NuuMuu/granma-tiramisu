import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";
import Main from "../Main/Main";
//import Item from "../Item/Item";
import data from "../../MOCK_DATA.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data
    };
  };
  
  componentDidMount() {
    console.log(this.state.products)
  };

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  };
};

export default App;