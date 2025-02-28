import { initializeApp, getApps, App, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBWkdIuET2GoQXo6Q2SexMZcM5Vby5YjA",
  authDomain: "notion-clone-a1b58.firebaseapp.com",
  projectId: "notion-clone-a1b58",
  storageBucket: "notion-clone-a1b58.firebasestorage.app",
  messagingSenderId: "501107021408",
  appId: "1:501107021408:web:62b282857ed4e243bf1505",
  measurementId: "G-QX6PPKBWNM"
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };