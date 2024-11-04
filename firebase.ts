// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBrVauk1_wq6SGspUA7dCymh9xB8Yllrg",
  authDomain: "notion-clone-cbda5.firebaseapp.com",
  projectId: "notion-clone-cbda5",
  storageBucket: "notion-clone-cbda5.firebasestorage.app",
  messagingSenderId: "781075890956",
  appId: "1:781075890956:web:24339688734e4db3773f29"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app);

export { db}