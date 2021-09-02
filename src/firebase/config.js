import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyDgSGDbz_irbYGAFgc-M1Mrg1n7aX5haMg",
  authDomain: "handmade-market-2581a.firebaseapp.com",
  projectId: "handmade-market-2581a",
  storageBucket: "handmade-market-2581a.appspot.com",
  messagingSenderId: "1014512714996",
  appId: "1:1014512714996:web:58540333b46d9a02a58aa1",
  measurementId: "G-3S3G4T2DGT"
};

firebase.initializeApp(config);

export const auth = getAuth();
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default firebase;
