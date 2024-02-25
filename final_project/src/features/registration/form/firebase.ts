import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Dispatch } from "redux";
import { closeForm, setSignedIn } from "../registerSlice";
import { makeAlert } from "@/features/alert/alertSlice";

const imp = import.meta.env;

const firebaseConfig = {
  apiKey: imp.VITE_API_KEY,
  authDomain: imp.VITE_AUTH_DOMAIN,
  projectId: imp.VITE_PROJECT_ID,
  storageBucket: imp.VITE_STORAGE_BUCKET,
  messagingSenderId: imp.VITE_MESSAGING_SENDER_ID,
  appId: imp.VITE_APP_ID,
  measurementId: imp.VITE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export const handleGoogleSignIn = async (dispatch: Dispatch) => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider);
    console.log("Google user:", user);

    const { displayName } = user;
    localStorage.setItem("userName", `${displayName}`);
    localStorage.setItem("signedIn", "true");

    dispatch(setSignedIn(true));

    dispatch(closeForm());

    dispatch(makeAlert("You successfully signed in"));
  } catch (error) {
    console.error("Google sign-in error:", error);

    dispatch(makeAlert("Sign in failed, try again!"));
  }
};
