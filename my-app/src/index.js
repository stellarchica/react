import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import register from "./registerServiceWorker";
import "./index.css"

ReactDOM.render(<App />, document.getElementById("root"));
register();