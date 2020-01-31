import React, { Component } from "react";
import Header from "./common/header/index";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import detail from "./pages/detail/loadable.js";
import home from "./pages/home";
import Login from "./pages/login";
import Write from "./pages/write";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/detail/:id" exact component={detail}></Route>
          <Route path="/write/" exact component={Write}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}
