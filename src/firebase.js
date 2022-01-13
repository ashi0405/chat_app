import "firebase/compat/firestore";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBl2Ob8YmLzEXDOFpIoQF2fBEOtblYBQc",
  authDomain: "message-clone-54e6d.firebaseapp.com",
  projectId: "message-clone-54e6d",
  storageBucket: "message-clone-54e6d.appspot.com",
  messagingSenderId: "169831299045",
  appId: "1:169831299045:web:6e57d97cb0a87e8ff8e10c",
  measurementId: "G-LJP2ZVY33C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
