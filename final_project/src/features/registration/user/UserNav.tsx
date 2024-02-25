import { useAppDispatch } from "@/app/store";
import Logo from "@/components/common/Logo";
import { closeIcon } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/features/theme/mode-toggle";
import { closeUserPanel } from "../registerSlice";

const UserNav = () => {
  const dispatch = useAppDispatch();

  const handleClosePanel = () => {
    document.body.removeAttribute("class");
    dispatch(closeUserPanel());
  };

  return (
    <nav className="top-4 grid grid-cols-[1fr_0.4fr] border-b pb-4 max-sm:mb-4 max-sm:border-b max-sm:pb-4 md:left-8 md:top-6">
      <ul className="grid cursor-pointer place-items-center gap-x-4 justify-self-start text-xl max-md:grid-cols-2">
        <li onClick={handleClosePanel}>
          <Button variant="ghost" className="text-xl">
            {closeIcon}
          </Button>
        </li>

        <li className="scale-110 md:hidden">
          <ModeToggle />
        </li>
      </ul>

      <div className="hidden justify-self-end pr-4 sm:block">
        <Logo />
      </div>
    </nav>
  );
};

export default UserNav;
