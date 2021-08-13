import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBxMBBPplti4elpkEk3DkAf8DzLAiESco",
  authDomain: "linkedinclonebykhair.firebaseapp.com",
  projectId: "linkedinclonebykhair",
  storageBucket: "linkedinclonebykhair.appspot.com",
  messagingSenderId: "884234983564",
  appId: "1:884234983564:web:6a66be3e8dbfdc8f4a43a9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
