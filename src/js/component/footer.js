import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
	return (
		<MDBFooter color="blue" className="font-small pt-4 mt-4">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="12">
						<h5 className="title">Footer Content</h5>
						<p>Here you can use rows and columns here to organize your footer content.</p>
						<div className="mb-5 flex-center">
							<a className="fb-ic">
								<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x" />
							</a>
							<a className="tw-ic">
								<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" />
							</a>
							<a className="gplus-ic">
								<i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x" />
							</a>
							<a className="li-ic">
								<i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x" />
							</a>
							<a className="ins-ic">
								<i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" />
							</a>
							<a className="pin-ic">
								<i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
							</a>
						</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{" "}
					<a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};

export default Footer;
