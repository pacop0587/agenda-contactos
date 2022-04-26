import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
