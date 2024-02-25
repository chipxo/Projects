import { RootState } from "@/app/rootReducer";
import { mOpacity } from "@/utils/motionSettings";
import { AnimatePresence, motion as m } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import Form from "../form/Form";
import BtnRegisSign from "./BtnRegisSign";
import UserNav from "./UserNav";
import PanelContent from "./PanelContent";

type UserPanelProps = {
  isBurger?: boolean;
};

const UserPannel: React.FC<UserPanelProps> = ({ isBurger = false }) => {
  const { openForm, signedIn } = useSelector(
    (state: RootState) => state.register,
  );

  return (
    <m.div
      {...mOpacity}
      className="fixed inset-0 right-0 top-0 z-[999] grid bg-black/40"
    >
      <m.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        exit={{ x: 300 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative space-y-4 justify-self-end border-l bg-background bg-user-panel bg-cover bg-center bg-no-repeat p-4 max-sm:w-[72vw] md:w-[40vw] md:p-6 lg:w-[34vw]"
      >
        <UserNav />

        {signedIn && <PanelContent />}

        {isBurger && (
          <>
            {!signedIn && (
              <div className="space-y-4">
                <h2 className="max-sm:text-md ml-6 text-end">
                  Sign in or register to acces private cabinet
                </h2>

                <div className="border-neutral grid gap-x-6 gap-y-1 border-t pt-4 sm:grid-cols-[1fr_0.1fr_1fr]">
                  <BtnRegisSign text="Sign in" signIn />

                  <h2 className="place-self-center max-sm:text-sm">or</h2>

                  <BtnRegisSign text="Register" />
                </div>
              </div>
            )}
            <AnimatePresence>{openForm && <Form />}</AnimatePresence>
          </>
        )}
      </m.div>
    </m.div>
  );
};

export default UserPannel;
