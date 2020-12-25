import firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyCjyyVxmqG-MSmAb7ElnyroxMK87IyTnKo',
	authDomain: 'to-do-app-362f1.firebaseapp.com',
	projectId: 'to-do-app-362f1',
	storageBucket: 'to-do-app-362f1.appspot.com',
	messagingSenderId: '1046645053586',
	appId: '1:1046645053586:web:06aba8aa0cf36b661d2e4b'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const { db } = firebase.firestore();
export default db;
