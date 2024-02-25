import AlertModal from "@/features/alert/AlerModal";
import NavBar from "../nav/NavBar";

const Header = () => (
  <header className="sticky top-0 z-[40] max-h-[80px] bg-background bg-header-bg bg-cover bg-center bg-no-repeat shadow-md">
    <NavBar />

    <div className="fixed left-1/2 top-20 z-[999] -translate-x-1/2">
      <AlertModal />
    </div>
  </header>
);

export default Header;
