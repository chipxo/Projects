import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

type BurgerProps = {
  handleClick: () => void;
};

const Burger: React.FC<BurgerProps> = ({ handleClick }) => {
  const [open, setOpen] = useState(false);

  const burgerClick = () => {
    handleClick();
    setOpen((pr) => !pr);
  };

  return (
    <div
      onClick={burgerClick}
      className="absolute right-3 top-6 cursor-pointer sm:hidden"
    >
      <FontAwesomeIcon
        icon={open ? faX : faBars}
        size="xl"
        className="self-end"
      />
    </div>
  );
};

export default Burger;
