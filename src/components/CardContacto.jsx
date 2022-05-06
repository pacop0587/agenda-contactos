//--> Start Imports

//Componentes
import "./CardContacto.css";

//-->End mports

const CardContacto = ({ item, deleteContact, editContact }) => {
	//Destructuracion de item
	const { id, nombre, apellido, direccion, email, telefono } = item;

	return (
		<div className="card mt-4 font-montse background-secondary-color">
			<div className="card-body">
				<h3 className="card-title text-secondary-color">
					{nombre} {apellido}
				</h3>
				<ul>
					<li className="card-text fs-5 text-secondary-color ">
						<span className="fw-bold">Direccion:</span> {direccion}{" "}
					</li>
					<li className="card-text fs-5 text-secondary-color">
						<span className="fw-bold">Email:</span> {email}{" "}
					</li>
					<li className="card-text fs-5 text-secondary-color">
						<span className="fw-bold">Telefono:</span> {telefono}{" "}
					</li>
				</ul>
				<div className="d-flex justify-content-around">
					<button
						className="btn background-third-color text-primary-color"
						onClick={() => editContact(id)}
					>
						Editar
					</button>
					<button
						className="btn background-fourth-color text-primary-color"
						onClick={() => deleteContact(id)}
					>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};

export default CardContacto;
