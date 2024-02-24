import { makeAlert } from "@/features/alert/alertSlice";
import { auth } from "@/features/registration/form/firebase";
import {
  closeForm,
  setRegistered,
} from "@/features/registration/registerSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";

type RegisterProps = {
  name: string | undefined;
  email: string;
  password: string;
  dispatch: Dispatch;
};

const registerUser = async ({
  name,
  email,
  password,
  dispatch,
}: RegisterProps) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  console.log(user);

  name && localStorage.setItem("userName", `${name}`);

  dispatch(setRegistered(true));
  dispatch(closeForm());

  dispatch(makeAlert("You successfully registered!"));
};

export default registerUser;
