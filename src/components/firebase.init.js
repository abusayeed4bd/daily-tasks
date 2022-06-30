// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDB3fLMH9HlnuxxqiP_UaBDtIK8y_zzh38",
    authDomain: "dailytaskbysayeed.firebaseapp.com",
    projectId: "dailytaskbysayeed",
    storageBucket: "dailytaskbysayeed.appspot.com",
    messagingSenderId: "677256344332",
    appId: "1:677256344332:web:6d06bb51c767f5c2180f29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;