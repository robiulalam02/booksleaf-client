import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBRKd8AvmcQvEzQdaSG6s_Y1GjZnOcCrN4",
    authDomain: "booksleaf-7a4b5.firebaseapp.com",
    projectId: "booksleaf-7a4b5",
    storageBucket: "booksleaf-7a4b5.firebasestorage.app",
    messagingSenderId: "635193400994",
    appId: "1:635193400994:web:1b4e5636d29e0aa1b841fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);