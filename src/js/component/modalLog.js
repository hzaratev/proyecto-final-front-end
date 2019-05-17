import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter } from "mdbreact";

class ModalLog extends Component {
	state = {
		modal1: false
	};

	toggle = nr => () => {
		let modalNumber = "modal" + nr;
		this.setState({
			[modalNumber]: !this.state[modalNumber]
		});
	};

	render() {
		return (
			<MDBContainer>
				<MDBBtn rounded color="primary" onClick={this.toggle(1)}>
					Iniciar sesión
				</MDBBtn>
				<MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)}>
					<MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={this.toggle(1)}>
						Inicio de sesión
					</MDBModalHeader>
					<MDBModalBody>
						<form className="mx-3 grey-text">
							<MDBInput
								label="Correo eletrónico"
								icon="envelope"
								group
								type="email"
								validate
								error="wrong"
								success="right"
							/>
							<MDBInput label="Contraseña" icon="lock" group type="password" validate />
						</form>
					</MDBModalBody>
					<MDBModalFooter className="justify-content-center">
						<MDBBtn color="primary" onClick={this.toggle(1)}>
							Entrar
						</MDBBtn>
						<br />
						<div className="createAccount">
							¿No tienes cuenta?
							<Link to="./home"> Crea una aquí</Link>
						</div>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default ModalLog;
