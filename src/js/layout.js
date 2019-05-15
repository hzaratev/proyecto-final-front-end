import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

/** Layouts **/

import LoginLayoutRoute from "./layouts/LoginLayout";
import DashboardLayoutRoute from "./layouts/DashboardLayout";

/** Components **/

import { Home } from "./views/home";
import { Example } from "./views/example";

/*
   App
 */

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Redirect to="/layout1" />
					</Route>
					<LoginLayoutRoute path="/layout1" component={Home} />
					<DashboardLayoutRoute path="/layout2" component={Home} />
				</Switch>
			</Router>
		);
	}
}

export default App;
