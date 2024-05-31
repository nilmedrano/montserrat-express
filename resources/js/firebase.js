// resources/js/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebaseConfig';

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener las instancias de los servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
