import { makeAlert } from "@/features/alert/alertSlice";
import { auth } from "@/features/registration/form/firebase";
import { closeForm, setSignedIn } from "@/features/registration/registerSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";

type SignInProps = {
  email: string;
  password: string;
  dispatch: Dispatch;
};

export const signIn = async ({ email, password, dispatch }: SignInProps) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  console.log(user);

  dispatch(setSignedIn(true));
  localStorage.setItem("signedIn", "true");

  dispatch(closeForm());

  dispatch(makeAlert("You successfully signed in!"));
};
