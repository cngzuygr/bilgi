import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCTK45JHJBfpNo7C1-4utwQRH2jJeZRJ1Y",
	authDomain: "bilgi-97f7c.firebaseapp.com",
	projectId: "bilgi-97f7c",
	storageBucket: "bilgi-97f7c.appspot.com",
	messagingSenderId: "162501275793",
	appId: "1:162501275793:web:0f086092eeb207b5dc8f30",
	measurementId: "G-JPSVNFFL81",
};
let app;

if (firebase.apps.length === 0) {
	const firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
