//Libraries
import { Formik } from "formik";
import swal from "sweetalert";

//Styles
import "./Formulario.css";
import { useEffect } from "react";

const Formulario = () => {
	return (
		<>
			<h2 className="text-center text-primary-color">Nuevo Contacto</h2>

			<Formik
				initialValues={{
					nombre: "",
					apellido: "",
					direccion: "",
					email: "",
					telefono: "",
				}}
				validate={({
					nombre,
					apellido,
					direccion,
					email,
					telefono,
				}) => {
					let error = {};
					//Validacion nombre
					if (!nombre) {
						error.nombre = "Por favor, ingresa un nombre.";
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombre)) {
						error.nombre = "Solo puede contener letras y espacios.";
					}
					//Validacion correo
					if (!email) {
						error.email = "Por favor, ingresa un correo";
					} else if (
						!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
							email
						)
					) {
						error.email =
							"Solo puede contener letras, numeros, puntos y guiones.";
					}
					//Validacion apellido
					if (!apellido) {
						error.apellido = "Por favor, ingresa un apellido.";
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(apellido)) {
						error.apellido =
							"Solo puede contener letras y espacios.";
					}
					//Validacion direccion
					if (!direccion) {
						error.direccion = "Por favor, ingresa una direccion.";
					}
					//Validacion telefono
					if (!telefono) {
						error.telefono = "Por favor, ingresa un telefono.";
					} else if (!/^[0-9]+$/.test(telefono)) {
						error.telefono = "Solo puede contener numeros.";
					}
					return error;
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm();
					//Alerta de informacion guardada
					swal("Contacto Guardado", "", "success");
				}}
			>
				{({
					values,
					handleBlur,
					errors,
					touched,
					handleSubmit,
					handleChange,
				}) => (
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
								onBlur={handleBlur}
							/>
							{touched.nombre && errors.nombre && (
								<p className="text-error">{errors.nombre}</p>
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
								onBlur={handleBlur}
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
								onBlur={handleBlur}
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
								onBlur={handleBlur}
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
								onBlur={handleBlur}
							/>
							{touched.telefono && errors.telefono && (
								<p className="text-error">{errors.telefono}</p>
							)}
						</div>
						<button
							type="submit"
							className="color-primary-background btn text-light mt-2"
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
