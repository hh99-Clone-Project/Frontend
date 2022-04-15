import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./shared/App";
import { Provider } from "react-redux";
import store from "./redux/configStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
<<<<<<< HEAD
  document.getElementById("root")
=======
  document.getElementById('root')
>>>>>>> 1a2883e78dda8a5b4068edfd8c1a3322028cea04
);
