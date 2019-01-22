import React, { Component } from "react";

import Expenses from "./Expenses";
import Accounts from "./Accounts";
import ChartHome from "./ChartHome";

class Home extends Component {
  render() {
    return (
      <div className="ui grid center aligned">
        <div className="expenses three wide column">
          <Expenses />
        </div>
        <div className="accounts three wide column">
          <Accounts />
        </div>
        <div className="chart three wide column">
          <ChartHome />
        </div>
      </div>
    );
  }
}

export default Home;
