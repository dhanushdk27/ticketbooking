import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCxiKUxiZp9ESExYGcS7oDzUo-fu1IVvlk",
    authDomain: "athuntication-f3e21.firebaseapp.com",
    projectId: "athuntication-f3e21",
    storageBucket: "athuntication-f3e21.appspot.com",
    messagingSenderId: "1065380278558",
    appId: "1:1065380278558:web:4d5cd9b7bae6fdccc3590f",
    measurementId: "G-VJ650Z9FDX"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db =getFirestore();
export default db
