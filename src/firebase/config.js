import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAnmI-7NkvBcOaqQWvnPiHas2LZsUlheRI",
  authDomain: "firegram-4dce2.firebaseapp.com",
  projectId: "firegram-4dce2",
  storageBucket: "firegram-4dce2.appspot.com",
  messagingSenderId: "989275725998",
  appId: "1:989275725998:web:d7981a1a4d11ecc18ccd3f",
  measurementId: "G-8CPFQQM859"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy

export { projectStorage, projectFirestore, timestamp };