// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrYWFx-Tl3wo_lqZ_DMItFdeihrP0sd_g",
  authDomain: "midori-city.firebaseapp.com",
  projectId: "midori-city",
  storageBucket: "midori-city.appspot.com",
  messagingSenderId: "301925790281",
  appId: "1:301925790281:web:a4e2da65c6c32ef0c58598",
  measurementId: "G-5DXPE10WCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db