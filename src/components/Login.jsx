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
		<div className="row">
			<div className="mt-5 col-12">
				<div className="login ">
					<h2 className="active">Iniciar Sesion</h2>
					<form action="" className="" onSubmit={handleSubmit}>
						<>
							<input
								type="text"
								className="text"
								value={userEmail}
								onChange={(e) => setUserEmail(e.target.value)}
							/>
							<span>Email</span>
						</>
						<>
							<input
								type="password"
								className="text"
								value={userPassword}
								onChange={(e) =>
									setUserPassword(e.target.value)
								}
							/>
							<span>Password</span>
						</>
						<button type="submit" className="signin">
							Iniciar Sesion
						</button>
						<div className="mt-4">
							<p className="register">¿No tienes cuenta?</p>
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
