import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light">
				<span className="navbar-brand mb-0 h1">TETRUECO</span>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a className="nav-link active" href="">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="">
							Favoritos
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="">
							Destacados
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="">
							Mi Lista
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}
