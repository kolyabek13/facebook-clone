import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyADqMzJChja_QaNKmKexT6ZQ8DQEe7b4Vc",
    authDomain: "faceboo-clone-d924a.firebaseapp.com",
    databaseURL: "https://faceboo-clone-d924a.firebaseio.com",
    projectId: "faceboo-clone-d924a",
    storageBucket: "faceboo-clone-d924a.appspot.com",
    messagingSenderId: "629998772250",
    appId: "1:629998772250:web:3ac29f562430a4633471a3",
    measurementId: "G-BSD3BVSEW7"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth , provider}
export default db