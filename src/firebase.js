// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9lxx5zDnL2GDcdWbyBAkIjODWK4eWwbk",
    authDomain: "task-tracker-db-9b50c.firebaseapp.com",
    databaseURL: "https://task-tracker-db-9b50c-default-rtdb.firebaseio.com",
    projectId: "task-tracker-db-9b50c",
    storageBucket: "task-tracker-db-9b50c.appspot.com",
    messagingSenderId: "983855713244",
    appId: "1:983855713244:web:b96d568d4d778a1faf5d19"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);



//const database = getDatabase(firebase)
//const dbRef = ref(database);

export default firebase;