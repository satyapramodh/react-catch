import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from "./NotFound";

// Fix github deployment using
// https://github.com/facebook/create-react-app/issues/1765

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route
        exact
        path="/"
        component={StorePicker}
      />
      <Route
        path="/store/:storeId"
        component={App}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;