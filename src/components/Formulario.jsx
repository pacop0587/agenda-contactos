import React from "react";
import "./Formulario.css";

const Formulario = () => {
	return (
		<>
			<h2 className="text-center text-primary-color">Nuevo Contacto</h2>
			<form action="" className="border rounded p-5 background-secondary-color">
				<div className="mb-3">
					<label htmlFor="" className="form-label text-secondary-color fw-bold">
						Nombre:
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="" className="form-label text-secondary-color fw-bold">
						Apellido:
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="" className="form-label text-secondary-color fw-bold">
						Direccion:
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="" className="form-label text-secondary-color fw-bold">
						Email:
					</label>
					<input type="text" className="form-control" />
				</div>
				<div className="mb-3">
					<label htmlFor="" className="form-label text-secondary-color fw-bold">
						Telefono:
					</label>
					<input type="text" className="form-control" />
				</div>
				<button
					type="input"
					className="color-primary-background btn text-light mt-2"
				>
					Guardar
				</button>
			</form>
		</>
	);
};

export default Formulario;
