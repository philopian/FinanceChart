import React, { Component } from "react";

import LineChart from "./components/LineChart";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Monthly Finances</h1>
        <LineChart />
      </div>
    );
  }
}
