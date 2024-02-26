import { useState } from "react";
import PanelTitle from "./PanelTitle";
import { Button } from "@/components/ui/button";
import { motion as m, AnimatePresence } from "framer-motion";
import { mOpacity } from "@/utils/motionSettings";
import { useAppDispatch } from "@/app/store";
import { closeUserPanel, setSignedIn } from "../registerSlice";
import { auth } from "../form/firebase";

const PanelContent = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    document.body?.removeAttribute("class");
    dispatch(closeUserPanel());

    setTimeout(() => {
      localStorage.removeItem("signedIn");
      dispatch(setSignedIn(false));
    }, 800);
  };

  const handleDeleteAcc = async () => {
    dispatch(closeUserPanel());

    try {
      await auth.currentUser?.delete();

      localStorage.removeItem("signedIn");
      localStorage.removeItem("userName");

      dispatch(setSignedIn(false));
    } catch (e) {
      console.error("Error deleting account:", e);
    }
  };

  return (
    <div className="grid w-full gap-y-4 text-end">
      <PanelTitle />

      <div className="grid w-full gap-x-3 border-t pt-6 max-sm:gap-y-3 sm:grid-cols-2 md:gap-x-6 lg:gap-x-12">
        <Button onClick={handleSignOut} variant="outline">
          Sign out
        </Button>

        <Button onClick={() => setOpen((pr) => !pr)} variant="default">
          Delete account
        </Button>

        <AnimatePresence>
          {open && (
            <m.div
              {...mOpacity}
              className="mt-5 text-center text-lg sm:col-span-2"
            >
              <h2>Are you sure?</h2>

              <div className="mt-4 grid grid-cols-2 gap-x-16">
                <Button onClick={handleDeleteAcc} variant="default">
                  Yes
                </Button>

                <Button onClick={() => setOpen((pr) => !pr)} variant="outline">
                  No
                </Button>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PanelContent;
