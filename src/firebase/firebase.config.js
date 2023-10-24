// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADpBE5t4cmxWJTNzUtOhPerhQThTadfUo",
    authDomain: "drivenest-a10.firebaseapp.com",
    projectId: "drivenest-a10",
    storageBucket: "drivenest-a10.appspot.com",
    messagingSenderId: "1039054840586",
    appId: "1:1039054840586:web:a9e1c94474246babf210f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;