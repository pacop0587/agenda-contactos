//----> Start Imports

//React
import { useState } from "react";

//Formik
import { Formik } from "formik";

//useContext
import { useUserContext } from "../UseProvider";

//Sweetalert
import swal from "sweetalert";

//Firebase
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

//React Router Dom
import { useNavigate } from "react-router-dom";

//---->End Imports

//----> Start Component
const Register = () => {
	//Valores iniciales de formik
	const initialValues = {
		email: "",
		password: "",
	};

	//Context que manda los datos del nuevo usuario a firebase auth
	const { loggedUser, setLoggedUser } = useUserContext();

	//Variable para redirigir registro
	const navigate = useNavigate();

	return (
		<div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
			<h2>Registrarse</h2>
			<Formik
				initialValues={initialValues}
				validate={(valores) => {
					let errores = {};

					//Email validate
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

					//Password validate
					if (!valores.password) {
						errores.password = "Por favor, ingresa una contreña";
					} else if (valores.password.length < 8) {
						errores.password =
							"La contraseña debe tener 8 caracteres como minimo";
					}

					return errores;
				}}
				onSubmit={async (valores) => {
					const { email, password } = valores;
					try {
						await createUserWithEmailAndPassword(
							auth,
							email,
							password
						);
						setLoggedUser(email.substring(0, email.indexOf("@")));
						navigate("/");
						swal({
							title: "Exito!",
							text: "Registro realizado",
							icon: "success",
						});
					} catch (error) {
						if (error.code === "auth/email-already-in-use") {
							swal({
								title: "Error",
								text: "Este correo ya fue registrado.",
								icon: "warning",
							});
						}
					}
				}}
			>
				{({ handleSubmit, values, handleChange, errors, touched }) => (
					<form className="mt-4" onSubmit={handleSubmit}>
						<div className="mb-3">
							<label className="form-label">Email</label>
							<input
								type="email"
								className="form-control"
								name="email"
								value={values.email}
								onChange={handleChange}
							/>
							{touched.email && errors.email && (
								<p className="text-danger">{errors.email}</p>
							)}
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<input
								type="password"
								name="password"
								values={values.password}
								onChange={handleChange}
								className="form-control"
							/>
							{touched.password && errors.password && (
								<p className="text-danger">{errors.password}</p>
							)}
						</div>

						<button type="submit" className="btn btn-primary">
							Guardar
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Register;
