import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD3xbS8fxYG2rLBd3R1Wt_LioZQV9QAjP4",
    authDomain: "lab-notes-remembrall.firebaseapp.com",
    projectId: "lab-notes-remembrall",
    storageBucket: "lab-notes-remembrall.appspot.com",
    messagingSenderId: "354285918379",
    appId: "1:354285918379:web:b063a7c58918af30837fee"
  };
  // Initialize Firebase
  const fireb=firebase.initializeApp(firebaseConfig);
  const fireStore=fireb.firestore();
  export{fireStore}