import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB8tOOXXk5ce_0dgcq-KTWYZWgpLJ1e--k",
  authDomain: "linkedin-clone-9efdf.firebaseapp.com",
  projectId: "linkedin-clone-9efdf",
  storageBucket: "linkedin-clone-9efdf.appspot.com",
  messagingSenderId: "531589342926",
  appId: "1:531589342926:web:b3c7be0a13d30940b8529f",
  measurementId: "G-0RMNXSH84H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new.firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export{auth,provider,storage};
export default db;