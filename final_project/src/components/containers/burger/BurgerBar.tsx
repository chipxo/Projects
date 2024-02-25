import { RootState } from "@/app/rootReducer";
import Form from "@/features/registration/form/Form";
import UserPannel from "@/features/registration/user/UserPanel";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Burger from "./Burger";

const BurgerBar = () => {
  const { openUserPanel, openForm } = useSelector(
    (state: RootState) => state.register,
  );

  return (
    <>
      <Burger />

      <AnimatePresence>
        {openUserPanel && <UserPannel isBurger />}
      </AnimatePresence>

      <AnimatePresence>
        {openForm && <Form />}
      </AnimatePresence>
    </>
  );
};

export default BurgerBar;
