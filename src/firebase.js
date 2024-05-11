// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA2WzQNrweHWDTeaG6KTEdLdq3Ob9CPZeE",
    authDomain: "clone-f9ad1.firebaseapp.com",
    projectId: "clone-f9ad1",
    storageBucket: "clone-f9ad1.appspot.com",
    messagingSenderId: "374870340835",
    appId: "1:374870340835:web:e22479554e3cce47d4c1d6",
    measurementId: "G-7J4BPE12JN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);//initializing database
const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export { db, auth };