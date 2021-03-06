import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import reducers from "./reducers";
import Home from "./components/Home";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" component={Welcome} exact />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
