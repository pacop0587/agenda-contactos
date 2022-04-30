import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: import.meta.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	projectId: import.meta.env.REACT_APP_FIREBASE_PROJECTID,
	storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
	appId: import.meta.env.REACT_APP_FIREBASE_APPID,
	// apiKey: "AIzaSyANTo5TvNndYlK6fnzgxq6PLEhUHHmeL98",
	// authDomain: "crud-contactos-b59af.firebaseapp.com",
	// projectId: "crud-contactos-b59af",
	// storageBucket: "crud-contactos-b59af.appspot.com",
	// messagingSenderId: "405770729563",
	// appId: "1:405770729563:web:df61634719af234dffe77e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
