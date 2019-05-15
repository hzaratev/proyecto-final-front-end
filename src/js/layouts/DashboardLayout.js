import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const DashboardLayout = ({ children, ...rest }) => {
	return (
		<div className="page page-dashboard">
			<div className="sidebar">This is the Second Layout AUTENTICADO</div>
			<div className="main">{children}</div>
		</div>
	);
};

DashboardLayout.propTypes = {
	children: PropTypes.any
};

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={matchProps => (
				<DashboardLayout>
					<Component {...matchProps} />
				</DashboardLayout>
			)}
		/>
	);
};

DashboardLayoutRoute.propTypes = {
	component: PropTypes.any
};

export default DashboardLayoutRoute;
