import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
	authDomain: import.meta.env.VITE_APP_FIREBASE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_APP_FIREBASE_PROJECTID,
	storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_APP_FIREBASE_APPID,
	// 	apiKey: "AIzaSyBQdrKmKaTev83KsG62PbM27YWB5wk3ptc",
	// 	authDomain: "crud-agenda-fb874.firebaseapp.com",
	// 	projectId: "crud-agenda-fb874",
	// 	storageBucket: "crud-agenda-fb874.appspot.com",
	// 	messagingSenderId: "634473141280",
	// 	appId: "1:634473141280:web:b6d9b0294b9232fac39845",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
