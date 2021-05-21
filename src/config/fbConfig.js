import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAsMGE9OcGvRQifePI2eU0ugAMhx_JFdRo",
    authDomain: "food-truck-application.firebaseapp.com",
    projectId: "food-truck-application",
    storageBucket: "food-truck-application.appspot.com",
    messagingSenderId: "146448075747",
    appId: "1:146448075747:web:7b6e078f7e712a55d46ed6",
    measurementId: "G-Q1RQ78MKY6"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;