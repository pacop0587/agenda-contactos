import "./App.css";
//Components
import Formulario from "./components/Formulario";

function App() {
	return (
		<div className="font-montse color-primary-background vh-100">
			<div className="container">
				<h1 className="text-center fw-bold text-primary-color">
					Agenda de contactos
				</h1>
				<div className="row mt-4">
					<div className="col-6">
						<Formulario />
					</div>
					<div className="col-6">
						<h2 className="text-center text-primary-color">
							Lista de contactos
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
