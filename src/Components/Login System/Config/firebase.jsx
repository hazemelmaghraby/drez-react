// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcqIubTDr8ATWluJCn1MDHum8gLJ-22pc",
    authDomain: "dre-z-a739e.firebaseapp.com",
    projectId: "dre-z-a739e",
    storageBucket: "dre-z-a739e.appspot.com",
    messagingSenderId: "71607206350",
    appId: "1:71607206350:web:83b48efc368cc252e4ab9f",
    measurementId: "G-2R3YTKZTR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app); // Initialize Firebase Storage
export { storage };

export { auth };

export const db = getFirestore(app);