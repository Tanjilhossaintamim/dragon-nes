// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUf5vU-_uXbfK-94vZWnlKQ6klX2Keyzk",
    authDomain: "dragon-news-a5f31.firebaseapp.com",
    projectId: "dragon-news-a5f31",
    storageBucket: "dragon-news-a5f31.appspot.com",
    messagingSenderId: "314762574627",
    appId: "1:314762574627:web:c2c6b3d1a02dc94bb3ea96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;