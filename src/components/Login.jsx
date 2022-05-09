//----> Start Imports

//React
import { useState } from "react";

//Firebase
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

//Context
import { useUserContext } from "../UseProvider";

//React Router Dom
import { useNavigate } from "react-router-dom";

//----> End Imports

const Login = () => {
	//----> Start States

	//Context
	const { login, setLoggedUser } = useUserContext();

	//Local
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	//const [errorLogin, setErrorLogin] = useState("");

	//----> End States

	//Variable navigate para redireccionar al usuario al index
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, userEmail, userPassword);
			setLoggedUser({ userEmail });
			console.log(loggedUser);
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
			}
		}
	};

	return (
		<div className="container ">
			<div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
				<div className=" shadow p-3 mb-5 bg-body rounded">
					<h2 className="">Iniciar Sesion</h2>
					<form
						action=""
						className="d-flex flex-column"
						onSubmit={handleSubmit}
					>
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
						<button type="submit" className="btn btn-success">
							Iniciar Sesion
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
