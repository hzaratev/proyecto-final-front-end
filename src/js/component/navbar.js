import React, { Component } from "react";
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem,
	MDBContainer,
	MDBIcon
} from "mdbreact";

class NavbarPage extends Component {
	state = {
		collapseID: ""
	};

	toggleCollapse = collapseID => () =>
		this.setState(prevState => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ""
		}));

	render() {
		return (
			<MDBContainer>
				<MDBNavbar color="blue" dark expand="md" style={{ marginTop: "20px" }}>
					<MDBNavbarBrand>
						<h1>
							<strong className="white-text">Trueque</strong>
						</h1>
					</MDBNavbarBrand>
					<MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
					<MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
						<MDBNavbarNav left>
							<MDBNavItem active>
								<MDBNavLink to="#!">Home</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBDropdown>
									<MDBDropdownToggle nav caret>
										<div className="d-none d-md-inline">Ir a</div>
									</MDBDropdownToggle>
									<MDBDropdownMenu className="dropdown-default" right>
										<MDBDropdownItem href="#!">Favoritos</MDBDropdownItem>
										<MDBDropdownItem href="#!">Destacados</MDBDropdownItem>
										<MDBDropdownItem href="#!">Mi Lista</MDBDropdownItem>
									</MDBDropdownMenu>
								</MDBDropdown>
							</MDBNavItem>
						</MDBNavbarNav>
						<MDBNavbarNav right>
							<MDBNavItem>
								<MDBNavLink className="waves-effect waves-light d-flex align-items-center" to="#!">
									1<MDBIcon icon="envelope" className="ml-1" />
								</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBDropdown>
									<MDBDropdownToggle className="dopdown-toggle" nav>
										<img
											src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
											className="rounded-circle z-depth-0"
											style={{ height: "35px", padding: 0 }}
											alt=""
										/>
									</MDBDropdownToggle>
									<MDBDropdownMenu className="dropdown-default" right>
										<MDBDropdownItem href="#!">Mi Cuenta</MDBDropdownItem>
										<MDBDropdownItem href="#!">Editar Perfil</MDBDropdownItem>
										<MDBDropdownItem href="#!">Log out</MDBDropdownItem>
									</MDBDropdownMenu>
								</MDBDropdown>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBNavbar>
			</MDBContainer>
		);
	}
}

export default NavbarPage;
