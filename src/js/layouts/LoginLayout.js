import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const LoginLayout = ({ children }) => (
	<div>
		<p>This is the First Layout PARA PAGINAS SIN AUTENTICACION</p>
		{children}
	</div>
);

LoginLayout.propTypes = {
	children: PropTypes.any
};

const LoginLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<LoginLayout>
					<Component {...matchProps} />
				</LoginLayout>
			)}
		/>
	);
};

LoginLayoutRoute.propTypes = {
	component: PropTypes.any
};

export default LoginLayoutRoute;
