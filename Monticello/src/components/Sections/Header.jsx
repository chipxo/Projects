import { useEffect, useState } from "react";
import Burger from "../common/Burger";
import Logo from "../common/CompanyLogo";
import NavBar from "../containers/NavBar";
import SocialBar from "../containers/SocialBar";
import links from "../data/navLinks.json";
import bgHeader from "../../assets/backgrounds/bg_slider_header.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerPosition = isScrolled
    ? "drop-shadow-2xl duration-200"
    : "md:top-4";

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full py-3 font-[Source-Sans] transition-all ${headerPosition}`}
    >
      {isScrolled && (
        <img
          src={bgHeader}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      )}
      <div className="container-header md:gap-x-18 container-header grid grid-cols-2 items-center gap-x-5 md:grid-cols-header-md lg:grid-cols-header lg:gap-x-5">
        <Logo />
        <Burger />
        <NavBar links={links} isBurger={false} isHeader={true} />
        <SocialBar isHeader={true} />
      </div>
    </header>
  );
};

export default Header;
