import NavBar from "../nav/NavBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-[40] max-h-[80px] bg-background bg-header-bg bg-cover bg-center bg-no-repeat shadow-md">
      <NavBar />
    </header>
  );
};

export default Header;
