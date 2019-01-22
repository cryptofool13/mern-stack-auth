import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return (
      <div className="ui container">
        <div className="ui segment floating center aligned">
          <h3>See you next time!</h3>
        </div>
        <div className="ui grid center aligned">
          <div className="three wide column">
            <p>Save money and build better spending habits with Budget-JS!</p>
          </div>
          <div className="three wide column">
            <div className="ui segment raised center aligned">
              <Link to="/signin">Sign in</Link>
            </div>
          </div>
          <div className="three wide column">
            <p>
              Visualize finance with integrated charts and cutting edge data
              extraction!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Signout);
