import React from "react";
import { Link } from "react-router-dom";
import ModalLog from "./modalLog";
import ModalSignUp from "./modalSignUp";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="MLogin">
					<ModalLog />
				</div>
				<div className="mSignup">
					<ModalSignUp />
				</div>
			</nav>
		);
	}
}
