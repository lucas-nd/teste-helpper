import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import CreateClients from "../pages/CreateClients";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/create" component={CreateClients} />
      </Switch>
    </BrowserRouter>
  );
}
