import { useAppDispatch } from "@/app/store";
import { Button } from "@/components/ui/button";
import React from "react";
import { closeForm, setRegistered } from "../registerSlice";
import { RootState } from "@/app/rootReducer";
import { useSelector } from "react-redux";
import { closeIcon } from "@/components/common/icons";

type FormHeaderProps = {
  reset: () => void;
};

const FormHeader: React.FC<FormHeaderProps> = ({ reset }) => {
  const dispatch = useAppDispatch();

  const { alreadyRegistered } = useSelector(
    (state: RootState) => state.register,
  );

  const handleCloseForm = () => {
    document.body.removeAttribute("class");
    dispatch(closeForm());
  };

  return (
    <div className="relative grid grid-cols-2 justify-items-center border-b px-8 py-2 lg:gap-x-12">
      {/* Buttons for switch between Sign in and Register */}
      <Button
        onClick={() => {
          reset();
          dispatch(setRegistered(true));
        }}
        variant={alreadyRegistered ? "default" : "outline"}
      >
        Sign in
      </Button>
      <Button
        onClick={() => {
          reset();
          dispatch(setRegistered(false));
        }}
        variant={!alreadyRegistered ? "default" : "outline"}
      >
        Register
      </Button>

      {/* Close the form */}
      <Button
        onClick={handleCloseForm}
        variant="outline"
        className="absolute -right-2 top-2 max-sm:border-none max-sm:bg-transparent md:right-2"
      >
        {closeIcon}
      </Button>
    </div>
  );
};

export default FormHeader;
