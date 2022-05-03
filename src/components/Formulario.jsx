//Import Firebase
import db from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

//Import Libraries
import { useFormik } from "formik";
import swal from "sweetalert";

//Import Hooks
import { useContactToggleContext } from "../UseProvider";

//Import Styles
import "./Formulario.css";

const Formulario = () => {
	//Funcion que cambia el estado global de contact mediante useContext
	const stateContact = useContactToggleContext();

	//InitialValues Formik
	const initialValues = {
		nombre: "",
		apellido: "",
		direccion: "",
		email: "",
		telefono: "",
	};

	//Validate form with Formik
	const validate = (values) => {
		const errors = {};

		//Nombre
		if (!values.nombre) {
			errors.nombre = "Por favor, ingresa un nombre.";
		} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
			errors.nombre = "Solo puede contener letras y espacios.";
		}
		//Apellido
		if (!values.apellido) {
			errors.apellido = "Por favor, ingresa un apellido.";
		} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.apellido)) {
			errors.apellido = "Solo puede contener letras y espacios.";
		}
		//Direccion
		if (!values.direccion) {
			errors.direccion = "Por favor, ingresa una direccion.";
		}
		//Email
		if (!values.email) {
			errors.email = "Por favor, ingresa un correo";
		} else if (
			!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
				values.email
			)
		) {
			errors.email =
				"Solo puede contener letras, numeros, puntos y guiones.";
		}
		//Telefono
		if (!values.telefono) {
			errors.telefono = "Por favor, ingresa un telefono.";
		} else if (!/^[0-9]+$/.test(values.telefono)) {
			errors.telefono = "Solo puede contener numeros.";
		}
		return errors;
	};
	//OnSubmit Formik
	const onSubmit = () => {
		//Guardar datos en firestore
		const agendaCollection = collection(db, "agenda");
		const { nombre, apellido, direccion, email, telefono } = values;

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
	};

	//Variable formik
	const formik = useFormik({ initialValues, validate, onSubmit });

	//Destructuracion de formik
	const { handleSubmit, handleChange, values, errors, touched } = formik;
	return (
		<>
			<h2 className="text-center text-primary-color">Nuevo Contacto</h2>
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
						<div className="text-error">{errors.nombre}</div>
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
		</>
	);
};

export default Formulario;
