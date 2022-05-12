//Componente que nos servira para pasar los valores globales por medio de useContext

//----> Start Imports

//React
import React from "react";
import { useState, useContext, useEffect } from "react";

//---->End Imports

//Creacion de los contextos para los valores globales
const contactContext = React.createContext();
const contactToggleContext = React.createContext();
const userContext = React.createContext();

//Hooks que serviran para exportarse a los demas componentes
export const useContactContext = () => useContext(contactContext);
export const useContactToggleContext = () => useContext(contactToggleContext);
export const useUserContext = () => useContext(userContext);

//----> Start Component
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

	//State que guarda el usuario que inicio sesion
	const [loggedUser, setLoggedUser] = useState("");

	return (
		<contactContext.Provider value={contact}>
			<contactToggleContext.Provider value={changeStateContact}>
				<userContext.Provider value={{ loggedUser, setLoggedUser }}>
					{children}
				</userContext.Provider>
			</contactToggleContext.Provider>
		</contactContext.Provider>
	);
};

export default UseProvider;
