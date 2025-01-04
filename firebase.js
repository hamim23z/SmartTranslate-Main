import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_GOOGLE_API_KEY,
  authDomain: "smarttranslateofficialv1.firebaseapp.com",
  projectId: "smarttranslateofficialv1",
  storageBucket: "smarttranslateofficialv1.firebasestorage.app",
  messagingSenderId: "121714772801",
  appId: "1:121714772801:web:348bfddeb8f3abf883efc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };