// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging";
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

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
const vapidKey = {
  vapidKey:
    "BKPdoByeeKh_FFLpeH7BD8Go1Oe-_3lFSVZvJ_BH1hLVdS9nWXcsJf0EyRSv85mMNV-iiSPU-_sUggkV812VDiw",
};
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db ,messaging, vapidKey }