//----> Start Imports

//Formik
import { Formik } from "formik";
//Sweetalert
import swal from "sweetalert";
//Firebase
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
//context
import { useContactToggleContext, useUserContext } from "../UseProvider";
//Styles
import "./Formulario.css";

//----> End Imports

const Formulario = ({ editionContact, modeEdition, setModeEdition }) => {
	//Funcion que cambia el estado global de contact mediante useContext
	const stateContact = useContactToggleContext();

	//Variable que trae el usuario que se encuentre en sesion
	const { loggedUser } = useUserContext();

	//Valores iniciales de formik
	const initialValues = {
		apellido: "",
		direccion: "",
		email: "",
		id: "",
		nombre: "",
		telefono: "",
	};

	//Variable y condicion que se ejecuta en caso de realizar una edicion de contacto, en caso de realizar una edicion los valores iniciales del formulario se modifican para que imprima en el formulario los datos del contacto a modificar
	let editValues = "";

	if (modeEdition) {
		editValues = {
			apellido: editionContact[0].apellido,
			direccion: editionContact[0].direccion,
			email: editionContact[0].email,
			id: editionContact[0].id,
			nombre: editionContact[0].nombre,
			telefono: editionContact[0].telefono,
		};
	}

	return (
		<div className="d-flex flex-column">
			<h2 className="text-center text-color-normal">
				{modeEdition ? "Editar Contacto" : "Nuevo Contacto"}
			</h2>
			<Formik
				//Valores iniciales y valores de edicion
				initialValues={editValues || initialValues}
				//Validacion del formulario
				validate={(valores) => {
					let errores = {};

					//Nombre
					if (!valores.nombre) {
						errores.nombre = "Por favor, ingresa un nombre.";
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
						errores.nombre =
							"Solo puede contener letras y espacios.";
					}
					//Apellido
					if (!valores.apellido) {
						errores.apellido = "Por favor, ingresa un apellido.";
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)
					) {
						errores.apellido =
							"Solo puede contener letras y espacios.";
					}
					//Direccion
					if (!valores.direccion) {
						errores.direccion = "Por favor, ingresa una direccion.";
					}
					//Email
					if (!valores.email) {
						errores.email = "Por favor, ingresa un correo";
					} else if (
						!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
							valores.email
						)
					) {
						errores.email =
							"Solo puede contener letras, numeros, puntos y guiones.";
					}
					//Telefono
					if (!valores.telefono) {
						errores.telefono = "Por favor, ingresa un telefono.";
					} else if (!/^[0-9]+$/.test(valores.telefono)) {
						errores.telefono = "Solo puede contener numeros.";
					}
					return errores;
				}}
				//Guardar nuevo registro o editar registro, dependiendo si esta habilitado el modo edicion
				onSubmit={(valores, { resetForm }) => {
					const { nombre, apellido, direccion, email, telefono } =
						valores;

					if (modeEdition) {
						const upDatos = async () => {
							const id = editionContact[0].id;
							const editData = doc(
								db,
								`agenda-${loggedUser}`,
								id
							);
							const data = {
								nombre,
								apellido,
								direccion,
								email,
								telefono,
							};
							await updateDoc(editData, data);
							swal("Edicion completada", "", "success");
							stateContact();
							resetForm();
						};
						upDatos();

						setModeEdition(false);
						return;
					} else {
						const agendaCollection = collection(
							db,
							`agenda-${loggedUser}`
						);
						const addDatos = async (
							nombre,
							apellido,
							direccion,
							email,
							telefono
						) => {
							try {
								const addData = await addDoc(agendaCollection, {
									nombre,
									apellido,
									direccion,
									email,
									telefono,
								});

								swal("Contacto Guardado", "", "success");
							} catch (error) {
								console.log(error);
							}
						};

						addDatos(nombre, apellido, direccion, email, telefono);
						//Cambiar el state global de contacto
						stateContact();
						resetForm();
					}
				}}
				enableReinitialize
			>
				{({ handleSubmit, values, handleChange, errors, touched }) => (
					<form
						className="border rounded-3 p-5 background-form shadow-lg d-flex flex-column"
						onSubmit={handleSubmit}
					>
						<div className="mb-3">
							<label
								htmlFor=""
								className="form-label fw-bold text-light"
							>
								Nombre:
							</label>
							<input
								type="text"
								className="form-control"
								name="nombre"
								value={values.nombre}
								onChange={handleChange}
							/>
							{touched.nombre && errors.nombre && (
								<div className="text-error">
									{errors.nombre}
								</div>
							)}
						</div>
						<div className="mb-3">
							<label
								htmlFor=""
								className="form-label fw-bold text-light"
							>
								Apellido:
							</label>
							<input
								type="text"
								className="form-control"
								name="apellido"
								value={values.apellido}
								onChange={handleChange}
							/>
							{touched.apellido && errors.apellido && (
								<p className="text-error">{errors.apellido}</p>
							)}
						</div>
						<div className="mb-3">
							<label
								htmlFor=""
								className="form-label fw-bold text-light"
							>
								Direccion:
							</label>
							<input
								type="text"
								className="form-control"
								name="direccion"
								value={values.direccion}
								onChange={handleChange}
							/>
							{touched.direccion && errors.direccion && (
								<p className="text-error">{errors.direccion}</p>
							)}
						</div>
						<div className="mb-3">
							<label htmlFor="" className="form-label text-light">
								Email:
							</label>
							<input
								type="text"
								className="form-control"
								name="email"
								value={values.email}
								onChange={handleChange}
							/>
							{touched.email && errors.email && (
								<p className="text-error">{errors.email}</p>
							)}
						</div>
						<div className="mb-3">
							<label
								htmlFor=""
								className="form-label fw-bold text-light"
							>
								Telefono:
							</label>
							<input
								type="text"
								className="form-control"
								name="telefono"
								value={values.telefono}
								onChange={handleChange}
							/>
							{touched.telefono && errors.telefono && (
								<p className="text-error">{errors.telefono}</p>
							)}
						</div>
						<button type="submit" className="btn btn-primary fs-5">
							{modeEdition ? "Guardar Cambios" : "Nuevo registro"}
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Formulario;
