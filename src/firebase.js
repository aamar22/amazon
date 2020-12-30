// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBWrdJ7heEEJY_pW77UyDg0e8XJdGleVjc",
    authDomain: "fir-1486b.firebaseapp.com",
    projectId: "fir-1486b",
    storageBucket: "fir-1486b.appspot.com",
    messagingSenderId: "914262624104",
    appId: "1:914262624104:web:00c06e7b3580b6e46a78dd",
    measurementId: "G-1RDXZFQ7D1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db,auth};
