import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import { showPasswordIcon } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { makeAlert } from "@/features/alert/alertSlice";
import { mOpacity } from "@/utils/motionSettings";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion as m } from "framer-motion";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { twJoin } from "tailwind-merge";
import FormHeader from "./FormHeader";
import { FirebaseError } from "firebase/app";
import { TSignUpSchema, signUpSchema } from "./formSchema";
import { signIn } from "@/hooks/signIn";
import registerUser from "@/hooks/registerUser";

import SignGoogle from "./SignGoogle";

const Form = () => {
  const dispatch = useAppDispatch();

  const { alreadyRegistered } = useSelector(
    (state: RootState) => state.register,
  );

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<TSignUpSchema> = async ({
    name,
    email,
    password,
  }) => {
    try {
      alreadyRegistered
        ? await signIn({ email, password, dispatch })
        : await registerUser({ name, email, password, dispatch });
    } catch (e) {
      const error = e as FirebaseError;
      console.log(error);

      if (error.message.includes("email-already-in-use")) {
        dispatch(makeAlert("Email is already in use, try again!"));

        reset();
      } else if (error.message.includes("invalid-credential")) {
        dispatch(
          makeAlert("Email isn't registered or wrong password, try again!"),
        );

        reset();
      } else {
        dispatch(makeAlert("Authentication error, try again!"));

        reset();
      }
    }
  };

  return (
    <m.div
      {...mOpacity}
      className="fixed inset-0 z-[200] grid items-center bg-black/70 px-4"
    >
      <div className="relative left-1/2 -translate-x-1/2 rounded-md bg-background max-md:container md:max-w-[64vw] xl:w-[45vw] xl:max-w-[700px]">
        <FormHeader reset={reset} />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sm:grid sm:grid-cols-[1fr_0.7fr]"
        >
          <div>
            <div className="grid gap-y-14 border-b px-2 py-8 sm:px-6">
              {!alreadyRegistered && (
                <label htmlFor="name" className="relative">
                  <span className="absolute -top-6 text-sm opacity-60">
                    Name
                  </span>
                  <Input
                    {...register("name")}
                    type="text"
                    name="name"
                    id="name"
                    className={twJoin(
                      "w-full rounded-md border bg-transparent p-2",
                      errors.name ? "border-red-600" : "border-neutral",
                    )}
                  />
                  {errors.name && (
                    <p className="absolute top-11 text-red-600">{`${errors.name.message}`}</p>
                  )}
                </label>
              )}
              <label htmlFor="email" className="relative">
                <span className="absolute -top-6 text-sm opacity-60">
                  Email
                </span>
                <Input
                  {...register("email")}
                  type="text"
                  name="email"
                  id="email"
                  className={twJoin(
                    "w-full rounded-md border bg-transparent p-2",
                    errors.email ? "border-red-600" : "border-neutral",
                  )}
                />
                {errors.email && (
                  <p className="absolute top-11 text-red-600">{`${errors.email.message}`}</p>
                )}
              </label>
              <label htmlFor="password" className="relative">
                <span className="absolute -top-6 text-sm opacity-60">
                  Password
                </span>
                <Input
                  {...register("password")}
                  type={`${showPassword ? "text" : "password"}`}
                  name="password"
                  id="password"
                  className={twJoin(
                    "w-full rounded-md border bg-transparent p-2",
                    errors.password ? "border-red-600" : "border-neutral",
                  )}
                />

                {/* Icon to show/hide password  */}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className={twJoin(
                    "absolute right-2 top-2 cursor-pointer",
                    !showPassword &&
                      "before:bg-base-300 opacity-30 before:absolute before:top-[10px] before:h-[2px] before:w-5 before:-rotate-45",
                  )}
                >
                  {showPasswordIcon}
                </span>
                {errors.password && (
                  <p className="absolute top-11 text-red-600">{`${errors.password.message}`}</p>
                )}
              </label>
            </div>
            <div className="grid px-6 py-4 text-sm">
              {/* Submitting button */}
              <Button variant="default">
                {alreadyRegistered ? "Sign in" : "Register"}
              </Button>
            </div>
          </div>
          <SignGoogle dispatch={dispatch} />
        </form>
      </div>
    </m.div>
  );
};

export default Form;
