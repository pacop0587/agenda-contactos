//Import Firebase
import db from "../firebase/firebaseConfig";
import { collection, addDoc, updateDoc } from "firebase/firestore";

//Import Libraries
import { Formik } from "formik";
import swal from "sweetalert";

//Import Hooks
import { useContactToggleContext } from "../UseProvider";
import { useState } from "react";

//Import Styles
import "./Formulario.css";

const Formulario = ({ editionContact, modeEdition }) => {
	console.log(editionContact);
	//Funcion que cambia el estado global de contact mediante useContext
	const stateContact = useContactToggleContext();

	const initialValues = {
		apellido: "",
		direccion: "",
		email: "",
		id: "",
		nombre: "",
		telefono: "",
	};

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
		<>
			<h2 className="text-center text-primary-color">Nuevo Contacto</h2>
			{/* <Formik
				initialValues={{
					apellido: "",
					direccion: "",
					email: "",
					id: "",
					nombre: "",
					telefono: "",
				}}
				validate={(valores) => {
					let errors = {};

					//Nombre
					if (!valores.nombre) {
						errors.nombre = "Por favor, ingresa un nombre.";
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
						errors.nombre =
							"Solo puede contener letras y espacios.";
					}
					//Apellido
					if (!valores.apellido) {
						errors.apellido = "Por favor, ingresa un apellido.";
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)
					) {
						errors.apellido =
							"Solo puede contener letras y espacios.";
					}
					//Direccion
					if (!valores.direccion) {
						errors.direccion = "Por favor, ingresa una direccion.";
					}
					//Email
					if (!valores.email) {
						errors.email = "Por favor, ingresa un correo";
					} else if (
						!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
							valores.email
						)
					) {
						errors.email =
							"Solo puede contener letras, numeros, puntos y guiones.";
					}
					//Telefono
					if (!valores.telefono) {
						errors.telefono = "Por favor, ingresa un telefono.";
					} else if (!/^[0-9]+$/.test(valores.telefono)) {
						errors.telefono = "Solo puede contener numeros.";
					}
					return errors;
				}}
				onSubmit={(valores, { resetForm }) => {
					console.log(valores);
					resetForm();
					//Guardar datos en firestore

					const { nombre, apellido, direccion, email, telefono } =
						valores;

					//Guardar nuevo registro o editar registro
					// if (modeEdition) {
					// 	const upDatos = async () => {
					// 		const id = editionContact[0].id;
					// 		const editCollection = collection(db, "agenda", id);
					// 		const data = {
					// 			nombre,
					// 			apellido,
					// 			direccion,
					// 			email,
					// 			telefono,
					// 		};
					// 		await updateDoc(editCollection, data);
					// 		modeEdition(false);
					// 		stateContact();
					// 		console.log("Archivo editado");
					// 	};
					// 	upDatos();
					// 	return;
					// }

					const agendaCollection = collection(db, "agenda");
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
				}}
			>
				{({ values, handleSubmit, handleChange, touched, errors }) => {
					<form
						className="border rounded p-5 background-secondary-color"
						onSubmit={handleSubmit}
					>
						<div className="mb-3">
							<label
								htmlFor=""
								className="form-label text-secondary-color fw-bold"
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
								className="form-label text-secondary-color fw-bold"
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
								className="form-label text-secondary-color fw-bold"
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
							<label
								htmlFor=""
								className="form-label text-secondary-color fw-bold"
							>
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
								className="form-label text-secondary-color fw-bold"
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
						<button
							type="submit"
							className="btn btn-primary text-primary-color"
						>
							Guardar
						</button>
					</form>;
				}}
			</Formik> */}
			<Formik
				initialValues={editValues || initialValues}
				validate={(valores) => {
					let errors = {};

					//Nombre
					if (!valores.nombre) {
						errors.nombre = "Por favor, ingresa un nombre.";
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
						errors.nombre =
							"Solo puede contener letras y espacios.";
					}
					//Apellido
					if (!valores.apellido) {
						errors.apellido = "Por favor, ingresa un apellido.";
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)
					) {
						errors.apellido =
							"Solo puede contener letras y espacios.";
					}
					//Direccion
					if (!valores.direccion) {
						errors.direccion = "Por favor, ingresa una direccion.";
					}
					//Email
					if (!valores.email) {
						errors.email = "Por favor, ingresa un correo";
					} else if (
						!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
							valores.email
						)
					) {
						errors.email =
							"Solo puede contener letras, numeros, puntos y guiones.";
					}
					//Telefono
					if (!valores.telefono) {
						errors.telefono = "Por favor, ingresa un telefono.";
					} else if (!/^[0-9]+$/.test(valores.telefono)) {
						errors.telefono = "Solo puede contener numeros.";
					}
					return errors;
				}}
				onSubmit={(valores, { resetForm }) => {
					const { nombre, apellido, direccion, email, telefono } =
						valores;

					// if (modeEdition) {
					// 	const upDatos = async (nombre, apellido, direccion, email, telefono) => {
					// 		const id = editionContact[0].id;
					// 		const editCollection = collection(db, "agenda", id);
					// 		const data = {
					// 			nombre,
					// 			apellido,
					// 			direccion,
					// 			email,
					// 			telefono,
					// 		};
					// 		await updateDoc(editCollection, data);
					// 		modeEdition(false);
					// 		stateContact();
					// 	};
					// 	upDatos(nombre, apellido, direccion, email, telefono);
					// 	console.log("formulario editado");
					// 	return;
					// }

					const agendaCollection = collection(db, "agenda");
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
				}}
				enableReinitialize
			>
				{({ handleSubmit, values, handleChange, errors, touched }) => (
					<form
						className="border rounded p-5 background-secondary-color"
						onSubmit={handleSubmit}
					>
						<div className="mb-3">
							<label
								htmlFor=""
								className="form-label text-secondary-color fw-bold"
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
								className="form-label text-secondary-color fw-bold"
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
								className="form-label text-secondary-color fw-bold"
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
							<label
								htmlFor=""
								className="form-label text-secondary-color fw-bold"
							>
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
								className="form-label text-secondary-color fw-bold"
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
						<button
							type="submit"
							className="btn btn-primary text-primary-color"
						>
							Guardar
						</button>
					</form>
				)}
			</Formik>
		</>
	);
};

export default Formulario;
