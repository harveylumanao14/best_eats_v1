import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
 
const firebaseConfig = {
    apiKey: "AIzaSyCsTFoAcaMLbGoYUAKV2_ey7ZD8ogOy-a4",
    authDomain: "best-eats-67892.firebaseapp.com",
    projectId: "best-eats-67892",
    storageBucket: "best-eats-67892.appspot.com",
    messagingSenderId: "986932640501",
    appId: "1:986932640501:web:c2a20f8af4ac7b74aba3bc",
    measurementId: "G-B4KKDVELXX"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)