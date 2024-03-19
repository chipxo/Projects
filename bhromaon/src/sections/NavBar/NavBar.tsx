import Burger from "./Burger/Burger";
import { useRef } from "react";
import DesctopLinks from "./DesctopLinks";
import MobileLinks from "./MobileLinks";

const NavBar = () => {
  const accordionTriggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-primary py-6 text-white">
      <ul className="container items-center sm:grid md:grid-cols-6 lg:grid-cols-7">
        <DesctopLinks />

        <MobileLinks ref={accordionTriggerRef} />

        <Burger handleClick={() => accordionTriggerRef.current?.click()} />
      </ul>
    </nav>
  );
};

export default NavBar;
