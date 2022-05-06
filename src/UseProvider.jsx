//Componente que nos servira para pasar los valores globales por medio de useContext

//--> Start Imports

import React from "react";
import { useState, useContext } from "react";

//-->End Imports

//Creacion de los contextos para los valores globales
const contactContext = React.createContext();
const contactToggleContext = React.createContext();

//Hooks que serviran para exportarse a los demas componentes
export const useContactContext = () => useContext(contactContext);
export const useContactToggleContext = () => useContext(contactToggleContext);

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

	return (
		<contactContext.Provider value={contact}>
			<contactToggleContext.Provider value={changeStateContact}>
				{children}
			</contactToggleContext.Provider>
		</contactContext.Provider>
	);
};

export default UseProvider;
