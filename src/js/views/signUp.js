import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class FormSignUp extends React.Component {
	state = {
		fname: {
			value: "",
			valid: true
		},
		lname: {
			value: "",
			valid: true
		},
		email: {
			value: "",
			valid: false
		},
		city: {
			value: "",
			valid: false
		},
		state: {
			value: "",
			valid: false
		},
		zip: {
			value: "",
			valid: false
		}
	};

	changeHandler = event => {
		this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
	};

	render() {
		return (
			<div className="d-flex p-2 col-example">
				<div>
					<form>
						<h4>Ingresa tus datos</h4>
						<MDBRow>
							<MDBCol md="8">
								<MDBInput
									value={this.state.fname.value}
									className={this.state.fname.valid ? "is-valid" : "is-invalid"}
									name="fname"
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterNameEx"
									label="Nombre"
									required>
									<div className="valid-feedback">Looks good!</div>
									<div className="invalid-feedback">Provide a valid name!</div>
								</MDBInput>
							</MDBCol>
							<MDBCol md="8">
								<MDBInput
									value={this.state.lname.value}
									className={this.state.lname.valid ? "is-valid" : "is-invalid"}
									name="lname"
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterEmailEx2"
									label="Apellido"
									required>
									<div className="valid-feedback">Looks good!</div>
									<div className="invalid-feedback">Provide a valid last name!</div>
								</MDBInput>
							</MDBCol>
							<MDBCol md="8">
								<MDBInput
									value={this.state.email.value}
									className={this.state.email.valid ? "is-valid" : "is-invalid"}
									onChange={this.changeHandler}
									type="email"
									id="materialFormRegisterConfirmEx3"
									name="email"
									label="Email">
									<small id="emailHelp" className="form-text text-muted" />
								</MDBInput>
							</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol md="8">
								<MDBInput
									value={this.state.city.value}
									className={this.state.city.valid ? "is-valid" : "is-invalid"}
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterPasswordEx4"
									name="city"
									label="Ciudad"
									required>
									<div className="invalid-feedback">Por favor, proporcione una ciudad válida</div>
									<div className="valid-feedback">Looks good!</div>
								</MDBInput>
							</MDBCol>
							<MDBCol md="8">
								<MDBInput
									value={this.state.state.value}
									className={this.state.state.valid ? "is-valid" : "is-invalid"}
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterPasswordEx4"
									name="state"
									label="Región"
									required>
									<div className="invalid-feedback">Por favor, proporcione una región válida</div>
									<div className="valid-feedback">Looks good!</div>
								</MDBInput>
							</MDBCol>
							<MDBCol md="8">
								<MDBInput
									value={this.state.zip.value}
									className={this.state.zip.valid ? "is-valid" : "is-invalid"}
									onChange={this.changeHandler}
									type="text"
									id="materialFormRegisterPasswordEx4"
									name="image"
									label="Imagenes"
									required>
									<div className="invalid-feedback">Utilice un formato permitido</div>
									<div className="valid-feedback">Looks good!</div>
								</MDBInput>
							</MDBCol>
						</MDBRow>
						<MDBCol md="4" className="mb-3">
							<div className="custom-control custom-checkbox pl-3">
								<input
									className="custom-control-input"
									type="checkbox"
									value=""
									id="invalidCheck"
									required
								/>
								<label className="custom-control-label" htmlFor="invalidCheck">
									Acepto términos y condiciones
								</label>
								<div className="invalid-feedback">You must agree before submitting.</div>
							</div>
						</MDBCol>
						<MDBBtn color="primary" type="submit">
							Registrarme
						</MDBBtn>
					</form>
				</div>
			</div>
		);
	}
}

export default FormSignUp;
