import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const TableMyItems = props => {
	const data_people = {
		columns: [
			{
				label: "#",
				field: "id",
				sort: "asc"
			},
			{
				label: "Producto",
				field: "item",
				sort: "asc"
			},
			{
				label: "Descripción",
				field: "description",
				sort: "asc"
			},
			{
				label: "Imagen",
				field: "image",
				sort: "asc"
			}
		],
		rows: [
			{
				id: "1",
				item: "Cámara",
				description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
				image: <img src={"https://as2.ftcdn.net/jpg/00/47/49/17/500_F_47491775_rvbQnwTmtspQ4smuSYDqDzHOaQefsngZ.jpg"} />
			},
			{
				id:"2",
				item: "Cámara2",
				description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
				image: <img src={"https://as2.ftcdn.net/jpg/00/47/49/17/500_F_47491775_rvbQnwTmtspQ4smuSYDqDzHOaQefsngZ.jpg"}  />
			},
			{
				id:"3",
				item: "Cámara3",
				description:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
				image: <img src={"https://as2.ftcdn.net/jpg/00/47/49/17/500_F_47491775_rvbQnwTmtspQ4smuSYDqDzHOaQefsngZ.jpg"}  />
			},
			{
				id:"4",
				item: "Cámara4",
				description:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
				image: (
					<img
						src={
							"https://as2.ftcdn.net/jpg/00/47/49/17/500_F_47491775_rvbQnwTmtspQ4smuSYDqDzHOaQefsngZ.jpg"
						}
					/>
				)
			},
			{
				id: "5",
				item: "Cámara5",
				description:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
				image: (
					<img
						src={
							"https://as2.ftcdn.net/jpg/00/47/49/17/500_F_47491775_rvbQnwTmtspQ4smuSYDqDzHOaQefsngZ.jpg"
						}
					/>
				)
			},
			{
				id: "6",
				item: "Cámara6",
				description:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
				image: (
					<img
						src={
							"https://as2.ftcdn.net/jpg/00/47/49/17/500_F_47491775_rvbQnwTmtspQ4smuSYDqDzHOaQefsngZ.jpg"
						}
					/>
				)
			},
			{
				id: "7",
				item: "Masajes",
				description:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
				image: (
					<img
						src={
							"https://as2.ftcdn.net/jpg/02/44/98/79/500_F_244987987_AQwUkMtrIDahL5xPvK3F2zNNzX5B25K3.jpg"
						}
					/>
				)
			},
			{
				id: "8",
				item: "Cámara8",
				description:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
				image: (
					<img
						src={Cámara7
							"https://as2.ftcdn.net/jpg/00/47/49/17/500_F_47491775_rvbQnwTmtspQ4smuSYDqDzHOaQefsngZ.jpg"
						}
					/>
				)
			}
		]https://as2.ftcdn.net/jpg/00/47/49/17/500_F_47491775_rvbQnwTmtspQ4smuSYDqDzHOaQefsngZ.jpg
	};

	return (
		<div className="d-flex justify-content-center">
			<MDBTable autoWidth striped>
				<MDBTableHead columns={data_people.columns} />
				<MDBTableBody rows={data_people.rows} />
			</MDBTable>
		</div>
	);
};

export default TableMyItems;
