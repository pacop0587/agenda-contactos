//----> Start Imports

//import UseProvider from "./UseProvider";
//React
import { useState, useEffect } from "react";

//Components
import Formulario from "../components/Formulario";
import Contactos from "../components/Contactos";
import Header from "../components/Header";

//Context
import { useUserContext } from "../UseProvider";

//React Router Dom
import { useNavigate } from "react-router-dom";

//Firebase
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

//----> End Imports

const index = () => {
	//----> Start States

	//Local
	const [editionContact, setEditionContact] = useState({});
	const [modeEdition, setModeEdition] = useState(false);

	//Context
	//const { loggedUser, setLoggedUser } = useUserContext();
	//----> End States

	//Variable para redirigir en caso de no estar logueado
	// const navigate = useNavigate();

	// if (loggedUser === "") {
	// 	navigate("/login");
	// 	return;
	// }

	// useEffect(() => {
	// 	onAuthStateChanged(auth, (userCurrent) => {
	// 		//const email = userCurrent.email;
	// 		setLoggedUser(
	// 			userCurrent.email.substring(0, userCurrent.email.indexOf("@"))
	// 		);
	// 	});
	// }, []);

	return (
		<div className="font-montse color-primary-background min-vh-100">
			<div className="container">
				<Header />
				<h1 className="text-center fw-bold text-primary-color">
					Agenda de contactos
				</h1>
				<div className="row mt-4">
					<div className="col-md-6 col-sm-12 p-5">
						<Formulario
							editionContact={editionContact}
							modeEdition={modeEdition}
							setModeEdition={setModeEdition}
						/>
					</div>
					<div className="col-md-6 col-sm-12">
						<h2 className="text-center text-primary-color">
							<Contactos
								setEditionContact={setEditionContact}
								setModeEdition={setModeEdition}
							/>
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
