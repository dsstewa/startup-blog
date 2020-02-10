import React from "react";
import ReactDOM from "react-dom";
//import the newly created custom sass file, that sass file imports the bootstrap data
import "./custom.scss";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import manageBlog from "./reducers/manageBlog";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk'

const store = createStore(
  manageBlog, applyMiddleware(thunk)
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
