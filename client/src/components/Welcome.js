import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="ui container">
      <div className="ui segment floating center aligned">
        <h3>Welcome!</h3>
      </div>
      <div className="ui grid center aligned">
        <div className="three wide column">
          <p>Save money and build better spending habits with Budget-JS!</p>
        </div>
        <div className="three wide column">
          <div className="ui segment raised center aligned">
            <Link to="/signin">Sign in</Link>
          </div>
          <div className="ui segment raised center aligned">
            <Link to="/signup">Sign up</Link>
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
};

export default Welcome;
