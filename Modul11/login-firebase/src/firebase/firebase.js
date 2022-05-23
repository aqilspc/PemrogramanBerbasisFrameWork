import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyDwF9aYOQdeL78lFm5IkFSKPn8fn0_EorQ",
  authDomain: "cobalogin-36072.firebaseapp.com",
  projectId: "cobalogin-36072",
  storageBucket: "cobalogin-36072.appspot.com",
  messagingSenderId: "588711876058",
  appId: "1:588711876058:web:8b559f1ff81ad40b779ce3"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;