import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4KxMAp0CBi97fzNxSZokYcWi3HdEQotE",
    authDomain: "emergxchat.firebaseapp.com",
    projectId: "emergxchat",
    storageBucket: "emergxchat.appspot.com",
    messagingSenderId: "39538834423",
    appId: "1:39538834423:web:70127060535911bf5f4cf2",
    measurementId: "G-46PER1DSPR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      
    })
    .catch((error) => {
      console.log(error);
    });
};