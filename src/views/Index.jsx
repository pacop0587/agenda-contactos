//----> Start Imports

//React
import { useState, useEffect } from "react";

//Components
import Formulario from "../components/Formulario";
import Contactos from "../components/Contactos";
import Header from "../components/Header";

//Styles
import "../App.css";

//----> End Imports

const index = () => {
	//----> Start States

	//Local
	const [editionContact, setEditionContact] = useState({});
	const [modeEdition, setModeEdition] = useState(false);

	return (
		<div className="background-color-second mw-100 mh-100">
			<div className="container">
				<Header />
				<h1 className="text-center fw-bold text-color-normal">
					Agenda de contactos
				</h1>
				<div className="row mt-5">
					<div className="col-sm-12 col-md-6">
						<Formulario
							editionContact={editionContact}
							modeEdition={modeEdition}
							setModeEdition={setModeEdition}
						/>
					</div>
					<div className="col-sm-12 col-md-6">
						<h2 className="text-center">
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
