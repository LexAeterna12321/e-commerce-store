// import dotenv from "dotenv";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBf4SnhHyiYqrqV1cADLzVJy_pXsoSrxCI",
  authDomain: "e-commerce-store-a6780.firebaseapp.com",
  databaseURL: "https://e-commerce-store-a6780.firebaseio.com",
  projectId: "e-commerce-store-a6780",
  storageBucket: "e-commerce-store-a6780.appspot.com",
  messagingSenderId: "48472848594",
  appId: "1:48472848594:web:03111ea676ca03f802950b",
  measurementId: "G-T5BXN746PL"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user -----", error);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
