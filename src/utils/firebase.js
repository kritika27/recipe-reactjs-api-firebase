import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB-77-Q9KtAEzLcaBn-iFI1smkHZpNrIyg",
  authDomain: "recipe-b7a54.firebaseapp.com",
  projectId: "recipe-b7a54",
  storageBucket: "recipe-b7a54.appspot.com",
  messagingSenderId: "1070029386064",
  appId: "1:1070029386064:web:32ef5fe7a4dbb303093c55",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;

export default firebase;
