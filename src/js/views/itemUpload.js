import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from "mdbreact";

const FormItem = () => {
	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="8">
					<form>
						<p className="h5 text-center mb-4">Agregar Item</p>

						<div className="col-11">
							<select className="custom-select custom-select-sm">
								<option>Categorías</option>
								<option value="1">Automotriz</option>
								<option value="2">Vestuario</option>
								<option value="3">Juegos/Juguetes</option>
								<option value="4">Otros</option>
							</select>
							<select className="custom-select custom-select-sm">
								<option>Ubicación</option>
								<option value="1">I Región</option>
								<option value="2">II Región</option>
								<option value="3">III Región</option>
								<option value="4">IV Región</option>
								<option value="5">V Región</option>
								<option value="6">VI Región</option>
								<option value="7">VII Región</option>
								<option value="8">VIII Región</option>
								<option value="9">IX Región</option>
								<option value="10">X Región</option>
								<option value="11">XI Región</option>
								<option value="12">XII Región</option>
								<option value="13">XIII Región</option>
								<option value="14">XIV Región</option>
								<option value="15">XV Arica & Parinacota</option>
								<option value="16">Región Metropolitana</option>
							</select>
							<div className="grey-text">
								<MDBInput
									label="Item"
									icon="tag"
									group
									type="text"
									validate
									error="wrong"
									success="right"
								/>
								<MDBInput type="textarea" rows="2" label="Descripción" icon="pencil-alt" />
							</div>
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text" id="inputGroupFileAddon01">
										Upload
									</span>
								</div>
								<div className="custom-file">
									<input
										type="file"
										className="custom-file-input"
										id="inputGroupFile01"
										aria-describedby="inputGroupFileAddon01"
									/>
									<label className="custom-file-label" htmlFor="inputGroupFile01">
										Agregar Foto
									</label>
								</div>
							</div>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default FormItem;
