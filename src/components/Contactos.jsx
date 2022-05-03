//Import Components
import CardContacto from "./CardContacto";

//Import Libraries
import { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

//Import firestore
import db from "../firebase/firebaseConfig";

//Import Hooks
import { useContactContext } from "../UseProvider";

const Contactos = () => {
	//States
	const [contactos, setContactos] = useState([]);
	const stateContact = useContactContext();

	//UseEffect que llama a la funcion que trae los datos de firestore
	useEffect(() => {
		const agendaCollection = collection(db, "agenda");
		const queryDataAgenda = async () => {
			const query = await getDocs(agendaCollection);
			const dataContacts = query.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			//Order contacts by name
			function sortArray(x, y) {
				if (x.nombre < y.nombre) {
					return -1;
				}
				if (x.nombre > y.nombre) {
					return 1;
				}
				return 0;
			}
			const dataContactsOrder = dataContacts.sort(sortArray);
			setContactos(dataContactsOrder);
		};

		queryDataAgenda();
	}, [stateContact]);

	//Eliminar contacto
	const deleteContact = async (id) => {
		// const contactDoc = doc(db, "agenda", id);
		// await deleteDoc(contactDoc);
		// getDocs();
		console.log(`Eliminando registro con id ${id}`);
	};
	return (
		<div className="p-5">
			<h2>Contactos</h2>
			{contactos.map((item) => (
				<CardContacto
					key={item.id}
					item={item}
					deleteContact={deleteContact}
				/>
			))}
		</div>
	);
};

export default Contactos;
