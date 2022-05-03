import React from "react";

const CardContacto = ({ item }) => {
	const { nombre, apellido, direccion, email, telefono } = item;

	return (
		<div class="card w-80">
			<div class="card-body">
				<h5 class="card-title">Card title</h5>
				<p class="card-text">
					With supporting text below as a natural lead-in to
					additional content.
				</p>
				<a href="#" class="btn btn-primary">
					Button
				</a>
			</div>
		</div>
	);
};

export default CardContacto;
