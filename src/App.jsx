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
import { Routes, Route, Navigate } from "react-router-dom";

//Context
import { useUserContext } from "./UseProvider";

//-->End Imports

//Componente que redirige a login en caso de no estar logueado
const RequireAuth = ({ children }) => {
	const { loggedUser } = useUserContext();
	if (!loggedUser) {
		return <Navigate to="/login" />;
	}
	return children;
};

function App() {
	return (
		<UseProvider>
			<Routes>
				<Route
					path="/"
					element={
						<RequireAuth>
							<Index />
						</RequireAuth>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</UseProvider>
	);
}

export default App;
