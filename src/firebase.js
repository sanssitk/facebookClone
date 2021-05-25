// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDuuAf4ypGEmWxCyl0WHbdlamKIN2H1z6w",
    authDomain: "facebook-clone-a0d60.firebaseapp.com",
    databaseURL: "https://facebook-clone-a0d60.firebaseio.com",
    projectId: "facebook-clone-a0d60",
    storageBucket: "facebook-clone-a0d60.appspot.com",
    messagingSenderId: "983851727941",
    appId: "1:983851727941:web:47876a22552c42fa95f72c",
    measurementId: "G-NFCNK2SQYD"
  };

  // Initializing firebase with config
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Creating dbsetup
  const db = firebaseApp.firestore();

  // Authenticating
  const auth = firebase.auth();

  // telling firebase to use google id to login
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;