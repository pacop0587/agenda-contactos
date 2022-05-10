import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
	authDomain: import.meta.env.VITE_APP_FIREBASE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_APP_FIREBASE_PROJECTID,
	storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
