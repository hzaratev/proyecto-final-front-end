import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Carousel from "./views/home";
import FormSignUp from "./views/signUp";
import TableMyItems from "./views/myItems";

import injectContext from "./store/appContext";
import FormItem from "./views/itemUpload";

import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { Sidebar } from "./component/sideBar";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Sidebar />
						<Switch>
							<Route exact path="/" component={Carousel} />
							<Route path="/signup" component={FormSignUp} />
							<Route path="/myitems" component={TableMyItems} />
							<Route path="/itemupload" component={FormItem} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
