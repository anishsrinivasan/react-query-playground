import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from "./privateRoute"
import Home from '../pages/Home/Home';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch key={location.pathname}>
          <PrivateRoute path='/' component={Home} auth={true} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
