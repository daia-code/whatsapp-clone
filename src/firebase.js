// src/firebase.js

import 'firebase/auth'; // Import the auth module for authentication functionality
import 'firebase/firestore';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCPkvv1UdNJR4Y0TG45ZwvC947TugrVmVc",
    authDomain: "whatsapp-clone-d063f.firebaseapp.com",
    projectId: "whatsapp-clone-d063f",
    storageBucket: "whatsapp-clone-d063f.appspot.com",
    messagingSenderId: "171306997819",
    appId: "1:171306997819:web:904813d70b6f826c9a241e",
    measurementId: "G-WKQPD9H0RC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebaseApp.auth(); // Initialize the auth module
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;


