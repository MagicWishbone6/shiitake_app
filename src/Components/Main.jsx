import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";

export default function Main() {
	return (
		<div className="main">
			<Route exact path="/" component={Home} />
		</div>
	);
}
