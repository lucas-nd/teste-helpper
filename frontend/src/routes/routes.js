import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import CreateClients from "../pages/CreateClients";
import ReadClients from "../pages/ReadClients";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/create" component={CreateClients} />
        <Route exact path="/read" component={ReadClients} />
      </Switch>
    </BrowserRouter>
  );
}
