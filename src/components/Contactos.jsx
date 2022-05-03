//Import Components
import CardContacto from "./CardContacto";

//Import Libraries
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import db from "../firebase/firebaseConfig";

const Contactos = () => {
	//States
	const [contactos, setContactos] = useState([]);

	//UseEffect que llama a la funcion que trae los datos de firestore
	useEffect(() => {
		const agendaCollection = collection(db, "agenda");
		const queryDataAgenda = async () => {
			const query = await getDocs(agendaCollection);
			setContactos(
				query.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		};

		queryDataAgenda();
	}, []);
	return (
		<>
			{contactos.map((item) => (
				<CardContacto key={item.id} item={item} />
			))}
		</>
	);
};

export default Contactos;
