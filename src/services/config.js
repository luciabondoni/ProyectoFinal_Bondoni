import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tienda-de-ropa-lucia.firebaseapp.com",
  projectId: "tienda-de-ropa-lucia",
  storageBucket: "tienda-de-ropa-lucia.appspot.com",
  messagingSenderId: "193483447369",
  appId: "1:193483447369:web:c0552ae4502b0468a6f398"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);