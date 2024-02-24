import { RootState } from "@/app/rootReducer";
import { useAppDispatch } from "@/app/store";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { closeAlert } from "./alertSlice";

const AlertModal = () => {
  const dispatch = useAppDispatch();

  const { text, openAlert } = useSelector((state: RootState) => state.alert);

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeAlert());
    }, 2000);
  }, [openAlert]);

  return (
    <AnimatePresence>
      {openAlert && (
        <m.div
          initial={{ opacity: 0, y: -66 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -66 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Alert>
            <AlertTitle>{text}</AlertTitle>
          </Alert>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default AlertModal;
