// import firebase from "firebase"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBZbUIDHt97TXgKfOxAuJDwQzvG4Lj69XQ",
  authDomain: "slack-clone-e3f4a.firebaseapp.com",
  projectId: "slack-clone-e3f4a",
  storageBucket: "slack-clone-e3f4a.appspot.com",
  messagingSenderId: "300026489679",
  appId: "1:300026489679:web:893c46758b8b1ee048b33a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};