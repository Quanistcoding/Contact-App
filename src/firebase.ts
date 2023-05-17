
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyaj0c57Wg9u_VIBVAMmQfwHDQD9RSWys",
  authDomain: "bigdataphonebook.firebaseapp.com",
  projectId: "bigdataphonebook",
  storageBucket: "bigdataphonebook.appspot.com",
  messagingSenderId: "756763274346",
  appId: "1:756763274346:web:956b4fd7328d7bed922e13"
};


const app = initializeApp(firebaseConfig);
export default getFirestore(app);