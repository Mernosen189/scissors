// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBoh_2qRJ3ptqaTK0keyI6c4s_cgG79Z2A",
    authDomain: "scissors-72ac2.firebaseapp.com",
    projectId: "scissors-72ac2",
    storageBucket: "scissors-72ac2.appspot.com",
    messagingSenderId: "598277131523",
    appId: "1:598277131523:web:6874eae08fe3e5e04b2d36",
    measurementId: "G-RHKNMPTJTR"
};

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

// Initialize Firebase



export default getFirestore();

//Use getAuth() to get the Auth service:
export const auth = getAuth(app)

// const analytics = getAnalytics(app);