//Componente que nos servira para pasar los valores globales por medio de useContext

//--> Start Imports

//React
import React from "react";
import { useState, useContext } from "react";

//Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

//-->End Imports

//Creacion de los contextos para los valores globales
const contactContext = React.createContext();
const contactToggleContext = React.createContext();
const loginContext = React.createContext();

//Hooks que serviran para exportarse a los demas componentes
export const useContactContext = () => useContext(contactContext);
export const useContactToggleContext = () => useContext(contactToggleContext);
export const useLoginContext = () => useContext(loginContext);

const UseProvider = ({ children }) => {
	//Estado global que servira para que el useEffect de Contactos.jsx se renderice de acuerdo a las acciones de CRUD
	const [contact, setContact] = useState(false);

	//Funcion que cambiara el estado del contact a true o false por cada vez que se llame
	const changeStateContact = () => {
		if (contact === true) {
			setContact(false);
		} else {
			setContact(true);
		}
	};

	//Funcion que guardara los datos de la persona que inicio sesion
	const loginUp = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password);
	};

	return (
		<contactContext.Provider value={contact}>
			<contactToggleContext.Provider value={changeStateContact}>
				<loginContext.Provider value={loginUp}>
					{children}
				</loginContext.Provider>
			</contactToggleContext.Provider>
		</contactContext.Provider>
	);
};

export default UseProvider;
