import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbXgGdBoXHdYa0ILPCjJaBNU42WWnF8Rk",

  authDomain: "clothing-store-6b913.firebaseapp.com",

  projectId: "clothing-store-6b913",

  storageBucket: "clothing-store-6b913.appspot.com",

  messagingSenderId: "788479369479",

  appId: "1:788479369479:web:2fde8ed0902e71915525a2",

  measurementId: "G-FHCR6SWCQP",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating user!", error.message);
    }
  }

  return userDocRef;
};
