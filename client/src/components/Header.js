import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./HeaderStyle.css";

class Header extends Component {
  renderLinks() {
    // const
    if (this.props.authenticated) {
      return (
        <div className="ui _header">
          <Link to="/home">Budget App</Link>
          <div>
            <Link to="/home">Home</Link>
            <Link to="/signout">Sign Out</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui _header">
          <Link to="/">Budget App</Link>
          <div>
            <Link to="/signup">Sign up</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderLinks()}</div>;
  }
}

const mapStateToProps = state => {
  return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(Header);
