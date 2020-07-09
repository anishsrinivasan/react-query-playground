import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import Routes from "./routes";
import Snackbar from "./components/snackbar/index";
import "./assets/css/common.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Snackbar />
        <Routes />
      </React.Fragment>
    );
  }
}

export default hot(App);
