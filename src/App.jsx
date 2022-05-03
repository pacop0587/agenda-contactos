import "./App.css";
//Components
import Formulario from "./components/Formulario";
import Contactos from "./components/Contactos";

function App() {
	return (
		<div className="font-montse color-primary-background min-vh-100">
			<div className="container">
				<h1 className="text-center fw-bold text-primary-color">
					Agenda de contactos
				</h1>
				<div className="row mt-4">
					<div className="col-md-6 col-sm-12 p-5">
						<Formulario />
					</div>
					<div className="col-md-6 col-sm-12">
						<h2 className="text-center text-primary-color">
							<Contactos />
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
