import { RootState } from "@/app/rootReducer.tsx";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Form from "../form/Form.tsx";
import UserPannel from "./UserPanel.tsx";
import UserAvatar from "./UserAvatar.tsx";

const User = () => {
  const { signedIn, openForm, openUserPanel } = useSelector(
    (state: RootState) => state.register,
  );

  return (
    <>
      <UserAvatar />

      <AnimatePresence>
        {openUserPanel && signedIn 
          ? <UserPannel /> 
          : openForm && <Form />
        }
      </AnimatePresence>
    </>
  );
};

export default User;
