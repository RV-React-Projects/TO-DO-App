import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAKi7Uj7JuTl8UbS9DhpsxPTj2inPN74Ws",
  authDomain: "to-do-app-1667d.firebaseapp.com",
  projectId: "to-do-app-1667d",
  storageBucket: "to-do-app-1667d.appspot.com",
  messagingSenderId: "312058030046",
  appId: "1:312058030046:web:559083956b3cbd41d7df4f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const { db } = firebase.firestore();

export { db };

