import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "rasp-c218c.firebaseapp.com",
  databaseURL: "https://rasp-c218c-default-rtdb.firebaseio.com",
  projectId: "rasp-c218c",
  storageBucket: "rasp-c218c.appspot.com",
  messagingSenderId: "28017357792",
  appId: "1:28017357792:web:f7a55ee34fc4da72c63185",
  measurementId: "G-0EKZL2989Z",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
