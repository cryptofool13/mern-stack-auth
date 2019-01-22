import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import * as actions from "../../actions";

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/home");
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            autoComplete=""
            focus
            type="text"
            component="input"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            autocomplete="none"
            type="password"
            component="input"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signin" })
)(Signin);
