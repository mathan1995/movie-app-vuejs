import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAmhuMOP6qahNP6NucAFRSol8fOTI_eFdk",
  authDomain: "movie-app-6c348.firebaseapp.com",
  databaseURL: "https://movie-app-6c348-default-rtdb.firebaseio.com",
  projectId: "movie-app-6c348",
  storageBucket: "movie-app-6c348.appspot.com",
  messagingSenderId: "1012422751991",
  appId: "1:1012422751991:web:5f28f38679b06e5deb45f2",
  measurementId: "G-X8PJNQQD5W",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
