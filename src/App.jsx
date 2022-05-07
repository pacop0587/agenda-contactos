//--> Start Imports

//Styles CSS
import "./App.css";
//Componets
import UseProvider from "./UseProvider";
import Index from "./views/Index";
import Login from "./components/Login";
import Error404 from "./views/Error404";
import Register from "./components/Register";
//React Router Dom
import { Routes, Route } from "react-router-dom";

//-->End Imports

function App() {
	return (
		<UseProvider>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</UseProvider>
	);
}

export default App;
