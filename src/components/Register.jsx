//----> Start Imports

//Formik
import { Formik } from "formik";

//useContext
import { useRegisterContext } from "../UseProvider";

//Sweetalert
import swal from "sweetalert";

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
	const authLogin = useRegisterContext();

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
				onSubmit={(valores) => {
					const { email, password } = valores;
					const submitData = async (email, password) => {
						try {
							await authLogin(email, password);
							navigate("/", {
								replace: true,
							});
							swal({
								title: "Exito!",
								text: "Registro realizado",
								icon: "success",
							});
						} catch (error) {
							console.log("Contacto ya usado");
							console.log(error);
						}
					};
					submitData(email, password);
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
							Submit
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Register;
