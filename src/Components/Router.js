/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header"
import Detail from "Routes/Detail"

export default () => (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" component={TV} />
          <Route path="/search" component={Search} />
          <Route path="/movie/:id" component={Detail} />
          <Route path="/show/:id" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );