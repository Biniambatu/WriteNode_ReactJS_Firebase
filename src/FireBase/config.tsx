import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpQtpIvZtT9oW1fJwoV5pLd_TrMKWysng",
  authDomain: "writenode-8ff7b.firebaseapp.com",
  projectId: "writenode-8ff7b",
  storageBucket: "writenode-8ff7b.firebasestorage.app",
  messagingSenderId: "240850175086",
  appId: "1:240850175086:web:18ca005cff76506add927f"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
