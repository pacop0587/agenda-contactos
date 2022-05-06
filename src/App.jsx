import "./App.css";
import UseProvider from "./UseProvider";
import Index from "./views/Index";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<UseProvider>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</UseProvider>
	);
}

export default App;
