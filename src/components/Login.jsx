//----> Start Imports

//React
import { useState } from "react";

//Firebase
import { auth } from "../firebase/firebaseConfig";
import {
	signInWithEmailAndPassword,
	onAuthStateChanged,
	setPersistence,
	browserSessionPersistence,
} from "firebase/auth";

//Context
import { useUserContext } from "../UseProvider";

//React Router Dom
import { useNavigate, Link } from "react-router-dom";

//styles
import "./Login.css";
//----> End Imports

const Login = () => {
	//----> Start States

	//Context
	const { setLoggedUser } = useUserContext();

	//Local
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

	//----> End States

	//Variable navigate para redireccionar al usuario al index
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, userEmail, userPassword);
			setLoggedUser(userEmail.substring(0, userEmail.indexOf("@")));

			navigate("/");
		} catch (error) {
			//setErrorLogin(error.code);
			if (error.code === "auth/user-not-found") {
				swal({
					title: "Error",
					text: "Correo no registrado.",
					icon: "warning",
				});
			} else if (error.code === "auth/wrong-password") {
				swal({
					title: "Error",
					text: "Password incorrecto",
					icon: "warning",
				});
			} else if (error.code === "auth/invalid-email") {
				swal({
					title: "Error",
					text: "Email incorrecto",
					icon: "warning",
				});
			}
		}
	};

	return (
		<div className="vh-100 wh-100 d-flex justify-content-center align-items-center background-color-second px-3">
			<div className="col-sm-12 col-md-4 background-color-first text-color-first height-200 d-flex flex-column justify-content-center align-items-center p-5 rounded">
				<div className="">
					<h2 className="">Iniciar Sesion</h2>

					<form action="" className="mt-4" onSubmit={handleSubmit}>
						<div className="mb-3">
							<label className="form-label">Email</label>
							<input
								type="text"
								className="form-control"
								value={userEmail}
								onChange={(e) => setUserEmail(e.target.value)}
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<input
								type="password"
								className="form-control"
								value={userPassword}
								onChange={(e) =>
									setUserPassword(e.target.value)
								}
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Iniciar Sesion
						</button>
						<hr className="mt-5" />
						<div className="">
							<p className="">¿No tienes cuenta?</p>
							<Link to="/register" className="register">
								Registrate
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
