import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseconfig = {
	apiKey: "AIzaSyDvAQJ9toHiRME5MJohfkgO9esz7bGr4uQ",
	authDomain: "react-photogallery-115e9.firebaseapp.com",
	projectId: "react-photogallery-115e9",
	storageBucket: "react-photogallery-115e9.appspot.com",
	messagingSenderId: "319397883366",
	appId: "1:319397883366:web:5f654197d546e0d81d7a27",
};

const fire = firebase.initializeApp(firebaseconfig);
const Firestorage = firebase.storage();
const Firestore = firebase.firestore();
const Timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { fire, Firestorage, Firestore, Timestamp };
