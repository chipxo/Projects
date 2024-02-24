import { useAppDispatch } from "@/app/store";
import { burgerIcon } from "@/components/common/icons";
import { showUserPanel } from "@/features/registration/registerSlice";

const Burger = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(showUserPanel())}
      className="grid cursor-pointer items-center justify-self-end text-3xl md:hidden"
    >
      {burgerIcon}
    </div>
  );
};

export default Burger;
