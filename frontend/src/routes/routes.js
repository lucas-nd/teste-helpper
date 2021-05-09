import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import CreateClients from "../pages/CreateClients";
import ReadClients from "../pages/ReadClients";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={CreateClients} />
        <Route exact path="/read" component={ReadClients} />
      </Switch>
    </BrowserRouter>
  );
}
