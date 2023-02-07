import { initializeApp } from 'firebase/app';
import * as auth from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyATmtqyLEceTSdRVa48dYRs-ukfoqQrQmc",
    authDomain: "mealstogo-9cbdb.firebaseapp.com",
    projectId: "mealstogo-9cbdb",
    storageBucket: "mealstogo-9cbdb.appspot.com",
    messagingSenderId: "480779276055",
    appId: "1:480779276055:web:0ba5d71c1f67c7a10d7152"
};

initializeApp(firebaseConfig);
const getAuth = auth.getAuth();

export const firebase = { auth, getAuth }
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
