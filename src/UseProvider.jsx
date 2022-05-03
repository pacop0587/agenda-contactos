import React from "react";
import { useState, useContext } from "react";

//context
const contactContext = React.createContext();
const contactToggleContext = React.createContext();

//hooks
export const useContactContext = () => useContext(contactContext);
export const useContactToggleContext = () => useContext(contactToggleContext);

const UseProvider = ({ children }) => {
	//State global
	const [contact, setContact] = useState(false);

	//Function change state contact
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
