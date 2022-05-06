import "./App.css";
import UseProvider from "./UseProvider";
import Index from "./views/Index";
import Login from "./components/Login";
import Error404 from "./views/Error404";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<UseProvider>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</UseProvider>
	);
}

export default App;
