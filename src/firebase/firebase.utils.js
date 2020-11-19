import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDdCnRTF8eM2QCSurGogQNGyHcDRKkh1Y4",
  authDomain: "crwn-db-91ce4.firebaseapp.com",
  databaseURL: "https://crwn-db-91ce4.firebaseio.com",
  projectId: "crwn-db-91ce4",
  storageBucket: "crwn-db-91ce4.appspot.com",
  messagingSenderId: "520804432916",
  appId: "1:520804432916:web:eb2ac30022af36f412fb01",
  measurementId: "G-3C94WLDFDF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
