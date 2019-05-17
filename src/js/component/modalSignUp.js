import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter } from "mdbreact";

class ModalSignUp extends Component {
	state = {
		modal2: false
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
				<MDBBtn rounded onClick={this.toggle(2)}>
					Registrarse
				</MDBBtn>
				<MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
					<MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={this.toggle(2)}>
						Creación de cuenta
					</MDBModalHeader>
					<MDBModalBody>
						<form className="mx-3 grey-text">
							<MDBInput
								label="Nombre y apellido"
								icon="user"
								group
								type="text"
								validate
								error="wrong"
								success="right"
							/>
							<MDBInput
								label="Ingresa tu email"
								icon="envelope"
								group
								type="email"
								validate
								error="wrong"
								success="right"
							/>
							<MDBInput label="Tu contraseña" icon="lock" group type="password" validate />
						</form>
					</MDBModalBody>
					<MDBModalFooter className="justify-content-center">
						<MDBBtn color="deep-orange" onClick={this.toggle(2)}>
							Registrarme
						</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default ModalSignUp;
