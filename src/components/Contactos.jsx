//--> Start Imports

//Import Components
import CardContacto from "./CardContacto";

//Import Libraries
import { useState, useEffect } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import swal from "sweetalert";
import { db } from "../firebase/firebaseConfig";

//Import Hooks
import {
	useContactContext,
	useContactToggleContext,
	useUserContext,
} from "../UseProvider";

//--> End Imports

const Contactos = ({ setEditionContact, setModeEdition }) => {
	//-->Start States

	//contactos guarda los contactos en un arreglo de objetos y los muestra en pantalla
	const [contactos, setContactos] = useState([]);
	//stateContact cambia true o false cada que se modifica, se elimina y se guarda un contacto nuevo, sirve para que el useEffect este actualizando la lista de contactos.
	const stateContact = useContactContext();

	//Variable que contiene el nombre del usuario que inicio sesion
	const { loggedUser } = useUserContext();

	//changeStateContact es una funcion que sirve para modificar el valor del stateContact
	const changeStateContact = useContactToggleContext();

	//-->End States

	//Funcion que trae todos los contactos que actualmente estan en la base de datos firestore
	const agendaCollection = collection(db, `agenda-${loggedUser}`);
	const queryDataAgenda = async () => {
		const query = await getDocs(agendaCollection);
		const dataContacts = query.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));
		//Ordenar contactos por nombre
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

	//UseEffect que se renderiza cada que el stateContact cambia y trae la lista actualizada de los contactos.
	useEffect(() => {
		queryDataAgenda();
	}, [stateContact]);

	//Funcion que elimina el contacto seleccionado
	const deleteContact = async (id) => {
		let buttonDelete = false;
		await swal({
			title: "Eliminar Contacto",
			text: "¿Estas seguro que deseas eliminar este contacto?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				swal("Contacto eliminado", {
					icon: "success",
				});
				buttonDelete = true;
			} else {
				buttonDelete = false;
			}
		});

		if (buttonDelete === true) {
			const contactDoc = doc(db, `agenda-${loggedUser}`, id);
			await deleteDoc(contactDoc);
			queryDataAgenda();
		}
		changeStateContact();
	};

	//Funcion que activa el modo de edicion y filtra de la lista de contactos, el contacto que se va a editar
	const editContact = (id) => {
		const filterContact = contactos.filter((item) => item.id === id);
		setEditionContact(filterContact);
		setModeEdition(true);
	};
	return (
		<div className="mx-5">
			<h2 className="text-color-normal">Contactos</h2>
			{contactos.map((item) => (
				<CardContacto
					key={item.id}
					item={item}
					deleteContact={deleteContact}
					editContact={editContact}
				/>
			))}
		</div>
	);
};

export default Contactos;
