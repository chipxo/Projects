import { makeAlert } from "@/features/alert/alertSlice";
import { auth } from "@/features/registration/form/firebase";
import {
  closeForm,
  setRegistered,
} from "@/features/registration/registerSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";

const registerUser = async ({ name, email, password, dispatch }: AuthType) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  console.log(user);

  name && localStorage.setItem("userName", `${name}`);

  dispatch(setRegistered(true));
  dispatch(closeForm());

  dispatch(makeAlert("You successfully registered!"));
};

export default registerUser;
