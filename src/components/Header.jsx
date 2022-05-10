//----> Start Imports

//Context
import { useUserContext } from "../UseProvider";

//React Router Dom
import { useNavigate } from "react-router-dom";

//Firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

//----> End Imports

const Header = () => {
	//Context para traer el usuario que inicio sesion
	const { loggedUser, setLoggedUser } = useUserContext();

	const navigate = useNavigate();

	const logOut = () => {
		//await signOut(auth);
		setLoggedUser("");
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-expand-lg">
			<ul className="navbar-brand">
				<li className="navbar-item text-light">
					Bienvenido {loggedUser}
				</li>
				<li>
					<button onClick={logOut}>Cerrar Sesion</button>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
