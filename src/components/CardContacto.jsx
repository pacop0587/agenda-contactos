//--> Start Imports

//Componentes
import "./CardContacto.css";

//-->End mports

const CardContacto = ({ item, deleteContact, editContact }) => {
	//Destructuracion de item
	const { id, nombre, apellido, direccion, email, telefono } = item;

	return (
		<div className="card mt-4 background-secondary-color p-2">
			<div className="card-body">
				<h3 className=" text-form mb-4 ">
					{nombre} {apellido}
				</h3>
				<ul>
					<li className="text-card-new text-form">
						<p className="fw-bold">Direccion: </p>
						<p>{direccion}</p>
					</li>
					<li className="text-card-new text-form ">
						<p className="fw-bold">Email:</p>
						<p>{email} </p>
					</li>
					<li className="text-card-new text-form ">
						<p className="fw-bold">Telefono:</p>
						<p>{telefono} </p>
					</li>
				</ul>
				<div className="d-flex justify-content-around">
					<button
						className="btn background-third-color text-form fs-5 "
						onClick={() => editContact(id)}
					>
						Editar
					</button>
					<button
						className="btn background-fourth-color text-form fs-5 "
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
