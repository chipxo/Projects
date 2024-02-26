import { makeAlert } from "@/features/alert/alertSlice";
import { auth } from "@/features/registration/form/firebase";
import { closeForm, setSignedIn } from "@/features/registration/registerSlice";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async ({ email, password, dispatch }: AuthType) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  console.log(user);

  dispatch(setSignedIn(true));
  localStorage.setItem("signedIn", "true");

  dispatch(closeForm());

  dispatch(makeAlert("You successfully signed in!"));
};
