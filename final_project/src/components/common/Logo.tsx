import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink
      to="/"
      className="flex h-14 w-14 items-center justify-self-start object-cover"
    >
      <h2 className="p-1 text-2xl font-bold italic text-primary md:text-4xl lg:font-extrabold">
        Vivo
      </h2>
    </NavLink>
  );
};

export default Logo;
