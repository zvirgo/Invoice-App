import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBPRv9flcZJh5tR038r9gUbrFMmjhwvnx8",
    authDomain: "invoice-app-85418.firebaseapp.com",
    projectId: "invoice-app-85418",
    storageBucket: "invoice-app-85418.appspot.com",
    messagingSenderId: "672344349822",
    appId: "1:672344349822:web:e72bd0f4552600f95a0c2f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();