import React from "react";
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardImage,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBBtn
} from "mdbreact";

const Carousel = () => {
	return (
		<MDBContainer>
			<MDBCarousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
				<MDBCarouselInner>
					<MDBCarouselItem itemId="1">
						<MDBRow>
							<MDBCol md="4">
								<MDBCard className="mb-2">
									<MDBCardImage
										className="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
									/>
									<MDBCardBody>
										<MDBCardTitle>MDBCard title</MDBCardTitle>
										<MDBCardText>Some quick example tex</MDBCardText>
										<MDBBtn color="primary">MDBBtn</MDBBtn>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
							<MDBCol md="4" className="clearfix d-none d-md-block">
								<MDBCard className="mb-2">
									<MDBCardImage
										className="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
									/>
									<MDBCardBody>
										<MDBCardTitle>MDBCard title</MDBCardTitle>
										<MDBCardText>Some quick example te</MDBCardText>
										<MDBBtn color="primary">MDBBtn</MDBBtn>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
							<MDBCol md="4" className="clearfix d-none d-md-block">
								<MDBCard className="mb-2">
									<MDBCardImage
										className="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
									/>
									<MDBCardBody>
										<MDBCardTitle>MDBCard title</MDBCardTitle>
										<MDBCardText>Some quick example te</MDBCardText>
										<MDBBtn color="primary">MDBBtn</MDBBtn>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
						</MDBRow>
					</MDBCarouselItem>
					<MDBCarouselItem itemId="2">
						<MDBRow>
							<MDBCol md="4">
								<MDBCard className="mb-2">
									<MDBCardImage
										className="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
									/>
									<MDBCardBody>
										<MDBCardTitle>MDBCard title</MDBCardTitle>
										<MDBCardText>Some quick example tex</MDBCardText>
										<MDBBtn color="primary">MDBBtn</MDBBtn>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
							<MDBCol md="4" className="clearfix d-none d-md-block">
								<MDBCard className="mb-2">
									<MDBCardImage
										className="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
									/>
									<MDBCardBody>
										<MDBCardTitle>MDBCard title</MDBCardTitle>
										<MDBCardText>Some quick example te</MDBCardText>
										<MDBBtn color="primary">MDBBtn</MDBBtn>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
							<MDBCol md="4" className="clearfix d-none d-md-block">
								<MDBCard className="mb-2">
									<MDBCardImage
										className="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
									/>
									<MDBCardBody>
										<MDBCardTitle>MDBCard title</MDBCardTitle>
										<MDBCardText>Some quick example te</MDBCardText>
										<MDBBtn color="primary">MDBBtn</MDBBtn>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
						</MDBRow>
					</MDBCarouselItem>
				</MDBCarouselInner>
			</MDBCarousel>
		</MDBContainer>
	);
};

export default Carousel;
