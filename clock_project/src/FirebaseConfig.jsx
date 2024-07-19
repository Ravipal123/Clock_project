
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIXIa9TYVWVNbZW9QfAVO1FDg6hbrkvSI",
  authDomain: "clockproject-4eda3.firebaseapp.com",
  projectId: "clockproject-4eda3",
  storageBucket: "clockproject-4eda3.appspot.com",
  messagingSenderId: "252046662265",
  appId: "1:252046662265:web:a52b0a9dadf48ce8bd52a8",
  measurementId: "G-LR5YDLZ8QZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, googleProvider, db};