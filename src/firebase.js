import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBETsLDc6QiG0yAoLtbs9FLI26tpGJZoEE",
  authDomain: "zaio--clone-93092.firebaseapp.com",
  projectId: "zaio--clone-93092",
  storageBucket: "zaio--clone-93092.firebasestorage.app",
  messagingSenderId: "30023836810",
  appId: "1:30023836810:web:3936cb8864e3a9ac70f973",
  measurementId: "G-4SCGDRLH3R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
;
export {db, auth}
