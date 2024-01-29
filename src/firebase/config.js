
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDzVPdqQcb6FEKH4LcfQRvZtwdpGvydGgc",
  authDomain: "tiendabuho-9eb85.firebaseapp.com",
  projectId: "tiendabuho-9eb85",
  storageBucket: "tiendabuho-9eb85.appspot.com",
  messagingSenderId: "856754468524",
  appId: "1:856754468524:web:bc3998d34c5b0f5bd9d109"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
