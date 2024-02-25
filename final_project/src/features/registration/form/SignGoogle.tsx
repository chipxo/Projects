import { Button } from "@/components/ui/button";
import { handleGoogleSignIn } from "./firebase";
import googleLogo from "@/assets/googleLogo.png";
import { Dispatch } from "@reduxjs/toolkit";
import React from "react";

type SignGoogleProps = {
  dispatch: Dispatch;
};

const SignGoogle: React.FC<SignGoogleProps> = ({ dispatch }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleGoogleSignIn(dispatch);
  };

  return (
    <div className="relative grid place-items-center max-sm:px-6 max-sm:pb-4 sm:border-l sm:px-6">
      <p className="absolute -left-3.5 top-1/2 -translate-y-1/2 cursor-default bg-background p-2 max-sm:hidden">
        or
      </p>

      <Button
        className="w-full gap-4"
        variant="ghost"
        onClick={(e) => handleClick(e)}
      >
        Sign in with
        <img
          className="h-5 w-5 object-fill"
          src={googleLogo}
          alt="Google logo"
        />
      </Button>
    </div>
  );
};

export default SignGoogle;
