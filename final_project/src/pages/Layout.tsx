import Footer from "@/components/containers/footer/Footer.tsx";
import Header from "@/components/containers/header/Header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
